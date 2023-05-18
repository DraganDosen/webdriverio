
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LinkPage  {
    /**
     * define selectors using getter methods
     */
    

    get url () {
        return "https://commerceos.staging.devpayever.com/";
    }

    get payeverEmail () {
        return "//*[@id='layout-container']/div/entry-login/div/form/peb-form-background/div/peb-form-field-input[1]/div/div/span";
    }

    get payeverEmailImport () {
        return "//*[@id='layout-container']/div/entry-login/div/form/peb-form-background/div/peb-form-field-input[1]/div/div/div/input";
    }

    get payeverPassword () {
        return "//*[@id='layout-container']/div/entry-login/div/form/peb-form-background/div/peb-form-field-input[2]/div/div/span";
    }

    get name () {
        return "//*[@id='layout-container']/div/entry-create-personal-form/form/div[2]/peb-form-background/div/two-column-form/div/peb-form-field-input[1]/div/div/span";
    }
    get surename () {
        return "//*[@id='layout-container']/div/entry-create-personal-form/form/div[2]/peb-form-background/div/two-column-form/div/peb-form-field-input[2]/div/div/span";
    }
    get email () {
        return "//*[@id='layout-container']/div/entry-create-personal-form/form/div[2]/peb-form-background/div/peb-form-field-input[1]/div/div/span";
    }
    get pass () {
        return "//*[@id='layout-container']/div/entry-create-personal-form/form/div[2]/peb-form-background/div/peb-form-field-input[2]/div/div/span";
    }
    get confpass () {
        return "//*[@id='layout-container']/div/entry-create-personal-form/form/div[2]/peb-form-background/div/peb-form-field-input[3]/div/div/span";
    }

    get company () {
        return "//*[@id='layout-container']/div/entry-default-business-registration/entry-create-business-form/form/peb-form-background/div/peb-form-field-input/div/div/span";
    }

    get detail () {
        return "//*[@id='layout-container']/div/entry-default-business-registration/entry-create-business-form/form/peb-form-background/div/pe-autocomplete/peb-form-field-input/div/div[1]/span";
    }

    get phone () {
        return "//*[@id='layout-container']/div/entry-default-business-registration/entry-create-business-form/form/peb-form-background/div/two-column-form/div/peb-form-field-input/div/div/span";
    }

    get widget1() {
        return "/html/body/app-root/app-lazy/user-dashboard/base-dashboard/div/div/div/widgets-layout/div/div/apps-widget/pe-widget/div/div/div[1]/div[2]/pe-widget-icons/div/div/div/div[1]";
    }
    get widget2() {
        return "/html/body/app-root/app-lazy/user-dashboard/base-dashboard/div/div/div/widgets-layout/div/div/apps-widget/pe-widget/div/div/div[1]/div[2]/pe-widget-icons/div/div/div/div[2]";
    }
    get widget3() {
        return "/html/body/app-root/app-lazy/user-dashboard/base-dashboard/div/div/div/widgets-layout/div/div/apps-widget/pe-widget/div/div/div[1]/div[2]/pe-widget-icons/div/div/div/div[3]";
    }
    get widget4() {
        return "/html/body/app-root/app-lazy/user-dashboard/base-dashboard/div/div/div/widgets-layout/div/div/apps-widget/pe-widget/div/div/div[1]/div[2]/pe-widget-icons/div/div/div/div[4]";
    }
    get widget5() {
        return "/html/body/app-root/app-lazy/user-dashboard/base-dashboard/div/div/div/widgets-layout/div/div/apps-widget/pe-widget/div/div/div[1]/div[2]/pe-widget-icons/div/div/div/div[5]";
    }
    get widget6() {
        return "/html/body/app-root/app-lazy/user-dashboard/base-dashboard/div/div/div/widgets-layout/div/div/apps-widget/pe-widget/div/div/div[1]/div[2]/pe-widget-icons/div/div/div/div[6]";
    }


}

export default new LinkPage();
