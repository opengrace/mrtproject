import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { ScheduleService } from '../../services/schedule.service';
// Import Models
import { Schedule } from '../../domain/mrtproject_db/schedule';

// START - USED SERVICES
/**
* scheduleService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* scheduleService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Schedule
 * @class ScheduleListComponent
 */
@Component({
    selector: 'app-schedule-list',
    templateUrl: './schedule-list.component.html',
    styleUrls: ['./schedule-list.component.css']
})
export class ScheduleListComponent implements OnInit {
    list: Schedule[];
    search: any = {};
    idSelected: string;
    constructor(
        private scheduleService: ScheduleService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.scheduleService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Schedule to remove
     *
     * @param {string} id Id of the Schedule to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Schedule
     */
    deleteItem() {
        this.scheduleService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
