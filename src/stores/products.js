import { defineStore } from 'pinia'
import { LocalStorage } from 'quasar'

export const useProductsStore = defineStore( 'products', {
  state: () => ( {
    storage_name: 'products_database',
    data: [],
  } ),
  getters: {
  },
  actions: {
    getLocalData () {
      return JSON.parse( LocalStorage.getItem( this.storage_name ) )
    },
    getData () {
      const data = this.getLocalData()

      if ( data ) { // Exists
        this.data = data
        return( data )
      } else { // NO exists
        this.saveData()
        return( this.data )
      }
    },
    saveData () {
      localStorage.setItem( this.storage_name, JSON.stringify( this.data ) );
    },
    addData ( data ) {
      this.data.push( data )
      this.saveData()
    },
    updateData ( updatedData ) {
      const index = this.data.findIndex( obj => obj.id === updatedData.id );

      if ( index !== -1 ) {
        this.data[ index ] = { ...this.data[ index ], ...updatedData }
        this.saveData()
      } else {
        console.error( 'Product not found!' )
      }
    },
    deleteData ( id ) {
      const index = this.data.findIndex( obj => obj.id === id );
      if ( index !== -1 ) {
        this.data.splice( index, 1 )
        this.saveData()
      } else {
        console.error( 'Product not found!' );
      }
    }
  },
} )

