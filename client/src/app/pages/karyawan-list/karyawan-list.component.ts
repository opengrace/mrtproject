import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { KaryawanService } from '../../services/karyawan.service';
// Import Models
import { Karyawan } from '../../domain/mrtproject_db/karyawan';

// START - USED SERVICES
/**
* karyawanService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* karyawanService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Karyawan
 * @class KaryawanListComponent
 */
@Component({
    selector: 'app-karyawan-list',
    templateUrl: './karyawan-list.component.html',
    styleUrls: ['./karyawan-list.component.css']
})
export class KaryawanListComponent implements OnInit {
    list: Karyawan[];
    search: any = {};
    idSelected: string;
    constructor(
        private karyawanService: KaryawanService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.karyawanService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Karyawan to remove
     *
     * @param {string} id Id of the Karyawan to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Karyawan
     */
    deleteItem() {
        this.karyawanService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
