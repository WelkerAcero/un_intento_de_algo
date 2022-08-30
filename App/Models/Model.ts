import Data from "./data";

export abstract class Model {

    private data: any[] = Data;
    protected query?: {};
    protected rows?: any;

    abstract set(arr: any): void;
    /*     abstract get(): any;
        abstract del(): any; */

    protected setQuery() {
        this.data.push(this.query);
    }

    protected getData(): any {
        return this.data;
    }

}