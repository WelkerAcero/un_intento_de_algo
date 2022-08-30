import { Model } from "../Models/Model";

export class DrivingPermission extends Model {

    set(arr: {}): void {

        this.query = arr;
        this.setQuery();
    }

    public get(): any {
        return this.getData();
    }

}
