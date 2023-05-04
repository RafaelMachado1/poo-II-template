import { BaseDatabase } from "./BaseDatabase";
import  { TAccountDB } from "../types"

export class AccountDatabase extends BaseDatabase {
    static TABLE_ACCOUNT = "accounts"

    async getAccounts(){
        const accounts = await BaseDatabase.connection(AccountDatabase.TABLE_ACCOUNT)

        return accounts
    }

    async getAccountBalanceById(id: string){
        const [ accountBalance ] = await BaseDatabase.connection(AccountDatabase.TABLE_ACCOUNT).where({id})

        if(!accountBalance){
            throw new Error("conta não encontrada!")
        }

        return accountBalance.balance
    }

}