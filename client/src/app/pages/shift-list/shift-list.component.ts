import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { ShiftService } from '../../services/shift.service';
// Import Models
import { Shift } from '../../domain/mrtproject_db/shift';

// START - USED SERVICES
/**
* shiftService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* shiftService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Shift
 * @class ShiftListComponent
 */
@Component({
    selector: 'app-shift-list',
    templateUrl: './shift-list.component.html',
    styleUrls: ['./shift-list.component.css']
})
export class ShiftListComponent implements OnInit {
    list: Shift[];
    search: any = {};
    idSelected: string;
    constructor(
        private shiftService: ShiftService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.shiftService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Shift to remove
     *
     * @param {string} id Id of the Shift to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Shift
     */
    deleteItem() {
        this.shiftService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
