// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { KaryawanService } from '../../services/karyawan.service';
import { ScheduleService } from '../../services/schedule.service';
// Import Models
import { Karyawan } from '../../domain/mrtproject_db/karyawan';
import { Schedule } from '../../domain/mrtproject_db/schedule';

// START - USED SERVICES
/**
* karyawanService.create
*	@description CRUD ACTION create
*
* scheduleService.findBy_karyawan
*	@description CRUD ACTION findBy_karyawan
*	@param Objectid key Id della risorsa _karyawan da cercare
*
* karyawanService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* karyawanService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Karyawan
 */
@Component({
    selector: 'app-karyawan-edit',
    templateUrl: 'karyawan-edit.component.html',
    styleUrls: ['karyawan-edit.component.css']
})
export class KaryawanEditComponent implements OnInit {
    item: Karyawan;
    list_karyawan: Karyawan[];
    externalSchedule: Schedule[];
    model: Karyawan;
    formValid: Boolean;

    constructor(
    private karyawanService: KaryawanService,
    private scheduleService: ScheduleService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Karyawan();
        this.externalSchedule = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.karyawanService.get(id).subscribe(item => this.item = item);
                this.scheduleService.findBy_karyawan(id).subscribe(list => this.externalSchedule = list);
            }
            // Get relations
        });
    }


    /**
     * Save Karyawan
     *
     * @param {boolean} formValid Form validity check
     * @param Karyawan item Karyawan to save
     */
    save(formValid: boolean, item: Karyawan): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.karyawanService.update(item).subscribe(data => this.goBack());
            } else {
                this.karyawanService.create(item).subscribe(data => this.goBack());
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



