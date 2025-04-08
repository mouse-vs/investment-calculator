import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestmentResultsComponent } from "./user-input/investment-results/investment-results.component";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        UserInputComponent,
        InvestmentResultsComponent,
    ],
    bootstrap: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
})
export class AppModule {}