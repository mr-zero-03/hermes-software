import{d as s,P as i}from"./index.fbf81f8b.js";const n=s("users",{state:()=>({storage_name:"users_database",defaultAdmin:{id:"a2-d3-m4-i5-n7",username:"Admin",email:"admin@test.com",password:"admin123",role:"admin"},data:[]}),getters:{},actions:{getLocalData(){return JSON.parse(i.getItem(this.storage_name))},getData(){const t=this.getLocalData();return t?(this.data=t,t):(this.saveData(),this.data)},getAllUsers(){const a=[...this.getData()];return a.push({...this.defaultAdmin}),a},saveData(){localStorage.setItem(this.storage_name,JSON.stringify(this.data))},addData(t){this.data.push(t),this.saveData()},updateData(t){const a=this.data.findIndex(e=>e.id===t.id);a!==-1?(this.data[a]={...this.data[a],...t},this.saveData()):console.error("User not found!")},deleteData(t){const a=this.data.findIndex(e=>e.id===t);a!==-1?(this.data.splice(a,1),this.saveData()):console.error("User not found!")}}});export{n as u};
