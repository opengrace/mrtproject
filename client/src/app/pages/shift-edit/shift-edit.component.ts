// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { ShiftService } from '../../services/shift.service';
import { ScheduleService } from '../../services/schedule.service';
// Import Models
import { Shift } from '../../domain/mrtproject_db/shift';
import { Schedule } from '../../domain/mrtproject_db/schedule';

// START - USED SERVICES
/**
* shiftService.create
*	@description CRUD ACTION create
*
* scheduleService.findBy_shift
*	@description CRUD ACTION findBy_shift
*	@param Objectid key Id della risorsa _shift da cercare
*
* shiftService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* shiftService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Shift
 */
@Component({
    selector: 'app-shift-edit',
    templateUrl: 'shift-edit.component.html',
    styleUrls: ['shift-edit.component.css']
})
export class ShiftEditComponent implements OnInit {
    item: Shift;
    list_shift: Shift[];
    externalSchedule: Schedule[];
    model: Shift;
    formValid: Boolean;

    constructor(
    private shiftService: ShiftService,
    private scheduleService: ScheduleService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Shift();
        this.externalSchedule = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.shiftService.get(id).subscribe(item => this.item = item);
                this.scheduleService.findBy_shift(id).subscribe(list => this.externalSchedule = list);
            }
            // Get relations
        });
    }


    /**
     * Save Shift
     *
     * @param {boolean} formValid Form validity check
     * @param Shift item Shift to save
     */
    save(formValid: boolean, item: Shift): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.shiftService.update(item).subscribe(data => this.goBack());
            } else {
                this.shiftService.create(item).subscribe(data => this.goBack());
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



