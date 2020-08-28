import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import {
  NgbButtonsModule,
  NgbProgressbarModule,
  NgbDatepickerModule,
  NgbRatingModule,
  NgbTimepickerModule,
  NgbPopoverModule,
  NgbCarouselModule,
  NgbTabsetModule,
  NgbTypeaheadModule,
  NgbDropdownModule,
  NgbNavModule,
} from "@ng-bootstrap/ng-bootstrap";

// import { HttpClientModule } from '@angular/common/http';

import { ShellModule } from "../shell/shell.module";
import { FileUploaderDirective } from "./file-uploader/file-uploader.directive";
import { ShowHidePasswordComponent } from "./show-hide-password/show-hide-password.component";
import { ShowHideInputDirective } from "./show-hide-password/show-hide-input.directive";
import { AlertTemplateComponent } from "./alert-template/alert-template.component";
import { NotificationTemplateComponent } from "./notification-template/notification-template.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatNativeDateModule } from "@angular/material/core";
import { MatChipsModule } from "@angular/material/chips";
import { MatSelectModule } from "@angular/material/select";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatInputModule } from "@angular/material/input";
import { MatStepperModule } from "@angular/material/stepper";

import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSliderModule } from "@angular/material/slider";

@NgModule({
  declarations: [
    FileUploaderDirective,
    ShowHidePasswordComponent,
    ShowHideInputDirective,
    AlertTemplateComponent,
    NotificationTemplateComponent,
  ],
  entryComponents: [AlertTemplateComponent, NotificationTemplateComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ShellModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    // HttpClientModule
  ],
  exports: [
    // Re-export these modules to prevent repeated imports (see: https://angular.io/guide/ngmodule#re-exporting-other-modules)
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // HttpClientModule,
    ShellModule,
    RouterModule,
    FileUploaderDirective,
    ShowHidePasswordComponent,
    ShowHideInputDirective,
    AlertTemplateComponent,
    NotificationTemplateComponent,
    // angular material modules

    MatTableModule,
    MatTabsModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatInputModule,
    MatNativeDateModule,
    MatChipsModule,
    MatSelectModule,
    MatStepperModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSliderModule,
    MatIconModule, // needed to use the MatIconRegistry to register our own icons
    // ng bootstrap modules
    NgbButtonsModule,
    NgbProgressbarModule,
    NgbDatepickerModule,
    NgbRatingModule,
    NgbTimepickerModule,
    NgbPopoverModule,
    NgbCarouselModule,
    NgbNavModule,
    NgbTypeaheadModule,
    NgbDropdownModule,
  ],
})
export class SharedModule {}
