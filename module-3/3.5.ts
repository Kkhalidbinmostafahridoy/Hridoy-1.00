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

        public addDiposite(amount:number){
            this._blance=this._blance+amount;
        }
        public getBlance(){
            return this._blance;
        }
    }

    class studentAccount extends BankAccount{
        test(){
            this._blance=this._blance
        }
    }

    const goribManusherAccount=new BankAccount(111,'hridoy',23);
    // goribManusherAccount.blance=;
    goribManusherAccount.addDiposite(8743);
    const myBlance=goribManusherAccount.getBlance()
    console.log(myBlance)
    // 
}