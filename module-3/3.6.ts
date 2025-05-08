{
    // 
    //getter and setter
    {
        // 
        // access modifire
    
        class BankAccount{
            public readonly id:number;
            public name:string;
            protected _blance:number;
    
            constructor(id:number,name:string,blance:number){
                this.id=id;
                this.name=name;
                this._blance=blance;
            }
            // getter

            get balance(){
                return this._blance;
            }

            set Deposite(amount:number){
                this._blance=this.balance+amount;
            }

            // public addDeposite(amount:number){
            //     this.balance=this.balance+amount
            // }
            
            // public getBlance(){
            //     return this._blance;
            // }
        }
    
        class studentAccount extends BankAccount{
            test(){
                this._blance=this._blance
            }
        }
    
        const goribManusherAccount=new BankAccount(111,'hridoy',230);
        // goribManusherAccount.diposite=0;
        // goribManusherAccount.addDiposite(8743); //function call krte hosse

        goribManusherAccount.Deposite=60
        // const myBlance=goribManusherAccount.getBlance()

        const myBlance=goribManusherAccount.balance;// property moto kore

        console.log(myBlance)
        // 
    }
    


    // 

}