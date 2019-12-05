// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { ScheduleService } from '../../services/schedule.service';
import { ShiftService } from '../../services/shift.service';
import { KaryawanService } from '../../services/karyawan.service';
// Import Models
import { Schedule } from '../../domain/mrtproject_db/schedule';
import { Karyawan } from '../../domain/mrtproject_db/karyawan';
import { Shift } from '../../domain/mrtproject_db/shift';

// START - USED SERVICES
/**
* scheduleService.create
*	@description CRUD ACTION create
*
* scheduleService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* shiftService.list
*	@description CRUD ACTION list
*
* karyawanService.list
*	@description CRUD ACTION list
*
* scheduleService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Schedule
 */
@Component({
    selector: 'app-schedule-edit',
    templateUrl: 'schedule-edit.component.html',
    styleUrls: ['schedule-edit.component.css']
})
export class ScheduleEditComponent implements OnInit {
    item: Schedule;
    list_karyawan: Karyawan[];
    list_shift: Shift[];
    model: Schedule;
    formValid: Boolean;

    constructor(
    private scheduleService: ScheduleService,
    private shiftService: ShiftService,
    private karyawanService: KaryawanService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Schedule();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.scheduleService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
            this.karyawanService.list().subscribe(list => this.list_karyawan = list);
            this.shiftService.list().subscribe(list => this.list_shift = list);
        });
    }


    /**
     * Save Schedule
     *
     * @param {boolean} formValid Form validity check
     * @param Schedule item Schedule to save
     */
    save(formValid: boolean, item: Schedule): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.scheduleService.update(item).subscribe(data => this.goBack());
            } else {
                this.scheduleService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}



