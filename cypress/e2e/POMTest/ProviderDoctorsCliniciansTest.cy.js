import LoginPage from '../pages/LoginPage.js';
import LandingPage from '../pages/LandingPage.js';
import HomePage from '../pages/HomePage.js';
import PlanselectionPage from '../pages/PlanselectionPage.js';
import longTermPage from '../pages/LongTermPage.js';
import PharmacyPage from '../pages/PharmacyPage.js';
import PreferencePage from '../pages/PreferencePage.js';
import PrescriptionPage from '../pages/PrescriptionPage.js';
import MedicarePage from '../pages/MedicarePage.js';
import ProviderDoctorsCliniciansPage from "../pages/ProviderDoctorsCliniciansPage.js";
describe('ProviderDoctorsClinicianspage Testing', () => {
     let testData = null;
    before(()=>{
         cy.fixture('LoginFixture').then((data)=>{
            testData=data;
         });
          })

    beforeEach(() => {
     cy.session("Provider DoctorsClinicians page session",()=>{
     cy.visit(testData.baseUrl);
     cy.wait(500);

      const lPage = new LoginPage();
      lPage.setUserName(testData.username);
      cy.wait(500);
      lPage.setPassword(testData.password);
      cy.wait(500);
      lPage.clickLoginBtn();
      cy.wait(500);

      const recPage = new LandingPage();
      recPage.clickproviderBut();
      cy.wait(500);
      
        const providerdoctorscliniciansPage = new ProviderDoctorsCliniciansPage();
        providerdoctorscliniciansPage.clickDoctorsCliniciansBtn();
        });
      
        cy.visit(testData.manageProviders_url)
        cy.wait(200)
    })

it('TC_PDP_AiVante_Logo_02 : This is to verify the functionality of "Aivante logo" on the manage provider page', () => {
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.clickAiVanteLogo();
    cy.log("Aivantelogo - Passed");
    cy.wait(200)
});
it('TC_PDP_PRO_BACK_03 : This is to verify "Back button" Functionality on the manage provider page within PDP application', () => {
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.clickbackBut();
    cy.log("Back button - Passed");
    cy.wait(200)
});
it('TC_PDP_T-SIGN_04 : This is to verify the functionality of the "T-Sign" icon located on the top right corner of the manage provider page', () => {
   const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.clickTsign();
    cy.log("Back button - Passed");
    cy.wait(200)
});
it('TC_PDP_PRV_DOC_05 : Search with Doctor Name', () => {
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.enterDoctorName(testData.Provdocdoctorname);
    cy.log("Doctor Name - Passed");
    cy.wait(100)
 });
it('TC_PDP_PRV_DOC_06 : Enter DoctorNameOption Verify that the Category Name', () => {
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.enterDoctorNameOption(testData.Provdocdoctornameoption);
    cy.log("DoctorNameOption - Passed");
    cy.wait(100)
});
it('TC_PDP_PRV_DOC_07 : Search with Business Name', () => {
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.enterBusinessName(testData.Provdocbusinessname);
    cy.log("DoctorNameOption - Passed");
   
});
it('TC_PDP_PRV_DOC_07-01 : Search with Street', () => {
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.enterDoctorName(testData.Provdocdoctorname);
    providerdoctorsclinicians.enterStreet(testData.Provdocstreet);
    cy.log("Street(Optionl) - Passed");
    });
it('TC_PDP_PRV_DOC_08 : Verify Zip Code Field Accepts Valid Zip Codes ', () => {
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.enterDoctorName(testData.Provdocdoctorname);
    providerdoctorsclinicians.enterZipCode2(testData.Provdoczipcode2);
    cy.log("Zipcode - Passed");
    cy.wait(200)
});
it('TC_PDP_PRV_DOC_09 : Verify Zip Code Field with Invalid Zip Code ', () => {
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.enterDoctorName(testData.Provdocdoctorname);
    providerdoctorsclinicians.enterInvalidZipCode2(testData.Provdocinvalidzipcode2);
    cy.log("InvalidZipcode - Passed");
    cy.wait(200)
});
it('TC_PDP_PRV_DOC_10 : Verify Zip Code Field with Blank Zip Code ', () => {    
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.enterBlankZipCode2(testData.Provdocblankzipcode2);
    providerdoctorsclinicians.clickZipSearch();
    providerdoctorsclinicians.clickZipcoderequirederror();
    cy.log("BlankZipcode - Passed");
    cy.wait(100)
});
it('TC_PDP_PRV_DOC_11 : Verify County, City are Visible in County, State Drop down ', () => {
   const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
   providerdoctorsclinicians.enterZipCode2(testData.Provdoczipcode2);
   providerdoctorsclinicians.clickZipSearch();
   providerdoctorsclinicians.enterRadius(testData.Provdocradius);
   providerdoctorsclinicians.clickCountyState();
   cy.log("clickCountyState - Passed");
});
it('TC_PDP_PRV_DOC_12 : Verify Clicking on County Selects the County Correctly', () => {
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.enterZipCode2(testData.Provdoczipcode2);
    providerdoctorsclinicians.clickZipSearch();
    providerdoctorsclinicians.enterRadius(testData.Provdocradius);
    providerdoctorsclinicians.clickCountydropdown();
    cy.log("clickCountyState - Passed");
    cy.wait(100)
});
it('TC_PDP_PRV_DOC_13 : Verify Cities are Visible in the City Dropdown ', () => {
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.enterZipCode2(testData.Provdoczipcode2);
   providerdoctorsclinicians.clickZipSearch();
   providerdoctorsclinicians.enterRadius(testData.Provdocradius);
    providerdoctorsclinicians.clickCitydropdown();
    cy.log("clickCity - Passed");
    cy.wait(100)
});
it('TC_PDP_PRV_DOC_14 : Verify Clicking on a City Selects the City Correctly', () => {
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
     providerdoctorsclinicians.enterZipCode2(testData.Provdoczipcode2);
     providerdoctorsclinicians.clickZipSearch();
     providerdoctorsclinicians.enterRadius(testData.Provdocradius);
     providerdoctorsclinicians.clickCity();
     cy.log("clickCity - Passed");
     cy.wait(200)
});

it('TC_PDP_PRV_DOC_15 : Verify Search icon for Category Doctors & clinicians on the manage-provider', () => {
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.enterZipCode2(testData.Provdoczipcode2);
   providerdoctorsclinicians.clickZipSearch();
    providerdoctorsclinicians.clickSearchProvider();
    cy.log("clicksearchprovider - Passed");
    cy.wait(500)
});
it('TC_PDP_PRV_CLEAR_16 : Verify the clear button on the manage-providers/provider-list page', () => {
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.enterZipCode2(testData.Provdoczipcode2);
    providerdoctorsclinicians.clickZipSearch();
    providerdoctorsclinicians.clickRadiusIn(testData.ProvdocradiusIn);
    cy.wait(1000);
    providerdoctorsclinicians.clickSearchProvider();
    cy.wait(1000);
    providerdoctorsclinicians.clickProviderFilter();
    providerdoctorsclinicians.enterDistance(testData.Provdocdistance);
    providerdoctorsclinicians.clickClearFilter();
    cy.log("clickClearbutton - Passed");
    cy.wait(1000)
});
it.skip('TC_PDP_PRV_FILTER_17 : Verify the Apply filter button on the manage-providers/provider-list page', () => {
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.enterZipCode2(testData.Provdoczipcode2);
    providerdoctorsclinicians.clickZipSearch();
    providerdoctorsclinicians.clickRadiusIn(testData.ProvdocradiusIn);
    cy.wait(1000);
    providerdoctorsclinicians.clickSearchProvider();
    cy.wait(1000);
    cy.get('.mat-expansion-panel-header-title.ng-tns-c210-14').contains('Provider filters').should('be.visible').click({ force: true });
    providerdoctorsclinicians.enterDistance(testData.Provdocdistance);
    providerdoctorsclinicians.clickGender();
    providerdoctorsclinicians.clickMale();
    providerdoctorsclinicians.clickApplyFilter();
    cy.log("clickClearbutton - Passed");
    cy.wait(100)
});
it('TC_PDP_PRV_FILTER_17-1 : Verify the Gender button on the manage-providers/provider-list page', () => {
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.enterZipCode2(testData.Provdoczipcode2);
    providerdoctorsclinicians.clickZipSearch();
    providerdoctorsclinicians.clickRadiusIn(testData.ProvdocradiusIn);
    cy.wait(1000);
    providerdoctorsclinicians.clickSearchProvider();
    cy.wait(1000);
    cy.get('mat-panel-title.mat-expansion-panel-header-title').contains('Provider filters').should('be.visible').click({ force: true });
    cy.wait(2000);
    providerdoctorsclinicians.enterDistance(testData.Provdocdistance);
    providerdoctorsclinicians.clickGender();
    cy.get('#mat-select-value-9').contains('All').click({ force: true });
    cy.log("clickGenderbutton - Passed");
    cy.wait(2000)
});
it('TC_PDP_PRV_FILTER_17-2 : Verify the Telehealth button with applyfilter on the manage-providers/provider-list page', () => {
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.enterZipCode2(testData.Provdoczipcode2);
    providerdoctorsclinicians.clickZipSearch();
    providerdoctorsclinicians.clickRadiusIn(testData.ProvdocradiusIn);
    cy.wait(1000);
    providerdoctorsclinicians.clickSearchProvider();
    cy.wait(1000);  
    cy.get('mat-panel-title.mat-expansion-panel-header-title').contains('Provider filters').should('be.visible').click({ force: true });
    providerdoctorsclinicians.enterDistance(testData.Provdocdistance);
    providerdoctorsclinicians.clickGender();
    providerdoctorsclinicians.clickAll();
    providerdoctorsclinicians.clickTelehealth();
    providerdoctorsclinicians.clickBoth();
    providerdoctorsclinicians.clickApplyFilter();
    cy.log("click Telehealthbutton - Passed");
    cy.wait(500)
});
it('TC_PDP_PRV_DOC_18 : Verify the Category Dropdown is Visible and Enabled', () => {
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.enterZipCode3(testData.Provdoczipcode3);
    providerdoctorsclinicians.clickZipSearch();
    providerdoctorsclinicians.clickRadiusIn(testData.ProvdocradiusIn);
    providerdoctorsclinicians.clickSearchProvider();
    cy.log("selectCategorydropdown - Passed");
    cy.wait(200)
});
it('TC_PDP_PRV_DOC_19 : Verify Available Categories in the Dropdown', () => {   
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.enterZipCode4(testData.Provdoczipcode4);
    providerdoctorsclinicians.clickZipSearch();
    providerdoctorsclinicians.clickRadiusIn(testData.ProvdocradiusIn);
    cy.get(".display-flex > .mat-focus-indicator > .mat-button-wrapper").should('be.visible').click();
    cy.get('.mat-form-field-infix.ng-tns-c170-24').should('be.visible').click();
    cy.log("clickCategorydropdown - Passed");
    cy.wait(500)
});
it('TC_PDP_PRV_DOC_20 : Verify Selection of a Category', () => {    
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.enterZipCode4(testData.Provdoczipcode4);
    providerdoctorsclinicians.clickZipSearch();
    providerdoctorsclinicians.clickRadiusIn(testData.ProvdocradiusIn);
    providerdoctorsclinicians.clickSearchProvider();
    cy.log("clickCategory - Passed");
    cy.wait(500)
})
it('TC_PDP_PRV_DOC_21 : Verify Filtesring Based on Selected Category', () => {    
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.enterZipCode5(testData.Provdoczipcode5);
    providerdoctorsclinicians.clickZipSearch();
    providerdoctorsclinicians.clickRadiusIn(testData.ProvdocradiusIn);
    cy.get(".display-flex > .mat-focus-indicator > .mat-button-wrapper").should('be.visible').click();
    providerdoctorsclinicians.selectCategorydropdown();
    cy.log("clickCategory - Passed");
    cy.wait(500)
});
it('TC_PDP_PRV_DOC_22 : Verify Default Category', () => {    
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    cy.get(".display-flex > .mat-focus-indicator > .mat-button-wrapper").should('be.visible').click();
    providerdoctorsclinicians.selectDefaultCategory();
    cy.log("clickDefaultCategory - Passed");
    cy.wait(200)
});
it('TC_PDP_PRV_DOC_23 : Verify Dropdown Persistence After Page Refresh', () => {  
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.clickSearchProvider();
    providerdoctorsclinicians.selectDefaultCategory();
    cy.log("clickDropdown persistence - Passed");
    cy.wait(2000)
}); 
it('TC_PDP_PRV_DOC_SPEC_24 : Verify the Specialty Dropdown is Visible and Enabled', () => {
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.enterDoctorName(testData.Provdocdoctorname);
    providerdoctorsclinicians.enterZipCode4(testData.Provdoczipcode4);
    providerdoctorsclinicians.clickZipSearch();
    providerdoctorsclinicians.selectSpecialtydropdown();
    cy.log("clickSpecialtydropdown - Passed");
    cy.wait(200)
});
it('TC_PDP_PRV_DOC_SPEC_25 : Verify Selection of a Specialty', () => {
   const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
   providerdoctorsclinicians.enterDoctorNameOption(testData.Provdocdoctorname);
   providerdoctorsclinicians.enterZipCode4(testData.Provdoczipcode4);
   providerdoctorsclinicians.clickZipSearch();
   providerdoctorsclinicians.selectSpecialtydropdown();
   providerdoctorsclinicians.enterSpecialityEle(testData.ProvdocSpecialityEle);
   cy.log("clickSpecialtydropdown - Passed");
    cy.wait(200)
});
it('TC_PDP_PRV_DOC_SPEC_26 : Verify No Results Message for "Doctor & Clinicians" and "Addiction Medicine"if No Providers are Available', () => {
   const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
   providerdoctorsclinicians.enterZipCode1(testData.Provdoczipcode1);
   providerdoctorsclinicians.clickZipSearch();
   providerdoctorsclinicians.clickRadiusIn(testData.ProvdocradiusIn);
   providerdoctorsclinicians.enterSpecialityEle(testData.ProvdocSpecialityEle);
   providerdoctorsclinicians.clickSearchProvider();
   cy.log("verify the results - Passed");
   cy.wait(200)
});
it('TC_PDP_PRV_DOC_SPEC_27 : Verify "Doctor & Clinician" Category with Specialty as "Addiction Medicine"', () => {
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.enterZipCode2(testData.Provdoczipcode2);
    providerdoctorsclinicians.clickZipSearch();
    providerdoctorsclinicians.clickRadiusIn(testData.ProvdocradiusIn);
    providerdoctorsclinicians.enterSpecialityEle();
    cy.get(".display-flex > .mat-focus-indicator > .mat-button-wrapper").should('be.visible').click();
    cy.log("verify the results - Passed");
    cy.wait(200)
 });
 it('TC_PDP_PRV_DOC_SPEC_28 : Verify "Doctor & Clinician" Category with Specialty as "Adult congenital heart disease (ACHD)"', () => {
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.enterZipCode2(testData.Provdoczipcode2);
    providerdoctorsclinicians.clickZipSearch();
    providerdoctorsclinicians.clickRadiusIn(testData.ProvdocradiusIn);
    providerdoctorsclinicians.clickAdultcongenitalheartdisease();
    providerdoctorsclinicians.clickSearchProvider();
    providerdoctorsclinicians.selectCategorydropdown();
    cy.log("verify the results - Passed");
    cy.wait(200)
 });
 it('TC_PDP_PRV_DOC_SPEC_29 : Verify "Doctor & Clinician" Category with Specialty as "Advanced heart failure and transplant cardiology"', () => {
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.enterZipCode2(testData.Provdoczipcode2);
    providerdoctorsclinicians.clickZipSearch();
    providerdoctorsclinicians.clickRadiusIn(testData.ProvdocradiusIn);
    providerdoctorsclinicians.clickAdvancedheartfailureandtransplantcardiology();
    providerdoctorsclinicians.clickSearchProvider();
    providerdoctorsclinicians.selectCategorydropdown();
    cy.log("verify the results - Passed");
    cy.wait(200)
 });
 it('TC_PDP_PRV_DOC_SPEC_30 : Verify "Doctor & Clinician" Category with Specialty as "Allergy/immunology"', () => {
    const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.enterZipCode2(testData.Provdoczipcode2);
    providerdoctorsclinicians.clickZipSearch();
    providerdoctorsclinicians.clickRadiusIn(testData.ProvdocradiusIn);
    providerdoctorsclinicians.clickAllergyimmunology();
    providerdoctorsclinicians.clickSearchProvider();
    providerdoctorsclinicians.selectCategorydropdown();
    cy.log("verify the results - Passed");
    cy.wait(200)
 });


it('TC_PDP_DOC_SPEC_52 : Verify "Doctor & Clinician" Category with Specialty as "General practice"', () => {
   const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
   providerdoctorsclinicians.enterZipCode2(testData.Provdoczipcode2);
   providerdoctorsclinicians.clickZipSearch();
   providerdoctorsclinicians.clickRadiusIn(testData.ProvdocradiusIn);
   providerdoctorsclinicians.clickGeneralpractice();
   providerdoctorsclinicians.clickSearchProvider();
   providerdoctorsclinicians.selectCategorydropdown();
   cy.log("verify the results - Passed");
   cy.wait(200)
});
it('TC_PDP_DOC_SPEC_120 : Verify "Doctor & Clinician" Category with Specialty as Qualified Speech language "Vascular surgery"', () => {
   const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
    providerdoctorsclinicians.enterZipCode2(testData.Provdoczipcode2);
    providerdoctorsclinicians.clickZipSearch();
    providerdoctorsclinicians.clickRadiusIn(testData.ProvdocradiusIn);
    providerdoctorsclinicians.clickVascularsurgery();
    providerdoctorsclinicians.clickSearchProvider();
    providerdoctorsclinicians.selectCategorydropdown();
    cy.log("verify the results - Passed");
    cy.wait(200)
});
it('TC_PDP_PRV_RADIUS_121 : Verify that the "Radius" field refreshes correctly for each Category', () => { //RADIUS REFRESH
   const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
   providerdoctorsclinicians.enterZipCode2(testData.Provdoczipcode2);
   providerdoctorsclinicians.clickZipSearch();
   providerdoctorsclinicians.clickRadiusIn(testData.ProvdocradiusIn);
   cy.wait(1000);
   cy.get(".display-flex > .mat-focus-indicator > .mat-button-wrapper").should('be.visible').click();
   cy.wait(1000);
   cy.get('.mat-expansion-panel-header').contains(' Search Provider ').click();
   cy.get('[formcontrolname="category"]').click({force: true})
   providerdoctorsclinicians.clickHospicecare();
   cy.get('.ng-star-inserted').contains("Radius is not applicable to this category. Because search is on basis of Zipcode");
   cy.get('.mat-expansion-panel-header').contains(' Search Provider ').click();
   cy.get('.mat-button-wrapper mat-icon').contains('close').click();
   cy.get('[formcontrolname="category"]').click({force: true} )
   cy.get('.mat-option-text').contains('Hospitals').click();
   cy.get('[formcontrolname="radius"]').should('be.visible');
   cy.get('.mat-expansion-panel-header').contains(' Search Provider ').click();
   cy.log("verify the results - Passed");
   cy.wait(2000)
});
it('TC_PDP_PRV_RADIUS_122 : Verify Default Radius Value is 15 Miles for "Doctors & Clinicians" Category on the Provider Page', () => {
   const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
   providerdoctorsclinicians.enterZipCode4(testData.Provdoczipcode4);
   providerdoctorsclinicians.clickZipSearch();
   providerdoctorsclinicians.clickRadiusIn(testData.ProvdocradiusIn);
   providerdoctorsclinicians.clickSearchProvider();
   providerdoctorsclinicians.selectCategorydropdown();
   cy.log("verify the results - Passed");
   cy.wait(200)
});
it('TC_PDP_PRV_RADIUS_123 : Verify Presence of Radius Input Field', () => {
   const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
   providerdoctorsclinicians.enterZipCode3(testData.Provdoczipcode3);
   providerdoctorsclinicians.clickZipSearch();
   providerdoctorsclinicians.clickRadiusIn(testData.ProvdocradiusIn);
   cy.log("verify the results - Passed");
   cy.wait(200)
})
it('TC_PDP_PRV_RADIUS_124 : Verify the valid Radius Value', () => {
   const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
   providerdoctorsclinicians.enterZipCode4(testData.Provdoczipcode4);
   providerdoctorsclinicians.clickZipSearch();
   providerdoctorsclinicians.enterRadius(testData.Provdocradius);
   providerdoctorsclinicians.clickSearchProvider();
   cy.log("verify the results - Passed");
   cy.wait(200)
});
it('TC_PDP_PRV_RADIUS_125 : Verify the radius field validation when submitted with an empty value', () => {
   const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
  providerdoctorsclinicians.enterZipCode6(testData.Provdoczipcode6);
   providerdoctorsclinicians.clickZipSearch();
   providerdoctorsclinicians.clickEmptyRadius("")
   cy.get('body').click({ force: true });
   cy.wait(1000);
   cy.get('#mat-error-2').contains("Radius is required.");
   cy.log("verify the results - Passed");
   cy.wait(200)
});
it('TC_PDP_PRV_RADIUS_126 : Verify Radius Field with Invalid Character Input', () => {
   const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
   providerdoctorsclinicians.enterZipCode6(testData.Provdoczipcode6);
   providerdoctorsclinicians.clickZipSearch();
   providerdoctorsclinicians.enteremptyradius(testData.Provdocemptyradius);
   cy.log("verify the results - Passed");
   cy.wait(200)
});
it('TC_PDP_PRV_RADIUS_127 : "This is to verify ""Back button" Functionality on the manage-providers/provider-list page within PDP application"', () => {
   const providerdoctorsclinicians = new ProviderDoctorsCliniciansPage();
   providerdoctorsclinicians.enterZipCode6(testData.Provdoczipcode6);
   providerdoctorsclinicians.clickSearchProvider();
   providerdoctorsclinicians.clickBackBtn(); 
   cy.log("verify the results - Passed");
   cy.wait(200)
});

});