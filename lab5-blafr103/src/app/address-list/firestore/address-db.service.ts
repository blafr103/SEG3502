import {Injectable} from "@angular/core";
import {AngularFirestore, DocumentChangeAction, DocumentReference} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";
import {AddressEntry} from "../address-entry";
import {AuthService} from "../../authentication/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AddressDbService {

  constructor(
    private firestore: AngularFirestore,
    private authService: AuthService
  ) {}

  getAddresses(): Observable<DocumentChangeAction<unknown>[]> {
    return this.firestore
      .collection('abooks')
      .doc(this.authService.userid)
      .collection('addresses')
      .snapshotChanges();
  }

  createAddress(address: AddressEntry): Promise<DocumentReference> {
    delete address.id;
    return this.firestore
      .collection('abooks')
      .doc(this.authService.userid)
      .collection('addresses')
      .add({...address});
  }

  updateAddress(address: AddressEntry): Promise<void> {
    const addressId = address.id;
    delete address.id;
    return this.firestore
      .collection('abooks')
      .doc(this.authService.userid)
      .collection('addresses')
      .doc(addressId!)
      .update(address);
  }

  deleteAddress(addressId: string): Promise<void> {
    return this.firestore
      .collection('abooks')
      .doc(this.authService.userid)
      .collection('addresses')
      .doc(addressId)
      .delete();
  }
}

