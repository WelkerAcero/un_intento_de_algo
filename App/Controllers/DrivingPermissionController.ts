import { DrivingPermission } from "../Models/DrivingPermission";

class DrivingPermissionController {

    private data?: any;

    constructor() {
        this.data = new DrivingPermission();
    }

    public set(data: {}) {
        return this.data.set(data);
    }

    public get() {
        return this.data.get();
    }
}

let objController = new DrivingPermissionController();

objController.set({
    "nombre": "Welker José",
    "edad": 40,
    "carnet de conducir": true
});

console.log(objController.get());

