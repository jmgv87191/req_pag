export interface Usuario {

        id?:number;
        name: string;
        calle:string;
        municipio: string;
        noCta: string;
        fechaUltPago: string,
        meses:string,
        adeudo:number,

}

export interface Login{
        email: string;
        password: string;
}

export interface ResponseI{
        status: string;
        token: any;
}