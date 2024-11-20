import { Routes } from '@angular/router';
import {AboutComponent} from './components/footer/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/footer/contact-us/contact-us.component';
import { PolicyComponent } from './components/footer/policy/policy.component';
import { LoginRegisterComponent } from './shared/components/user/login-register/login-register.component';
import { ForgotPasswordComponent } from './shared/components/user/forgot-password/forgot-password.component';
import { OtpVerificationComponent } from './shared/components/user/otp-verification/otp-verification.component';
import { SuccessScreenComponent } from './shared/components/user/success-screen/success-screen.component';
import { CartComponent } from './shared/components/cart-components/cart/cart.component';
import { UserRegisterComponent } from './shared/components/user/user-register/user-register.component';
import { SelectAddressComponent } from './shared/components/address/select-address/select-address.component';
import { PlaceOrderComponent } from './shared/components/order-history/place-order/place-order.component';
// import { OrderConfirmationComponent } from './shared/components/order-confirmation/order-confirmation.component';
import { AddNewAddressComponent } from './shared/components/address/add-new-address/add-new-address.component';
import { UserProfileComponent } from './shared/components/user/user-profile/user-profile.component';
import { FaqComponent } from './components/footer/faq/faq.component';
import { OrderConfirmedDetailsComponent } from './shared/components/order-history/order-confirmed-details/order-confirmed-details.component';
import { OrderTrackingStatusComponent } from './shared/components/order-history/order-tracking-status/order-tracking-status.component';
import { OrderHistoryProductDetailsComponent } from './shared/components/order-history/order-history-product-details/order-history-product-details.component';
import { OrderCancellationComponent } from './shared/components/order-history/order-cancellation/order-cancellation.component';
import { OrderCancelConfirmationComponent } from './shared/components/order-history/order-cancel-confirmation/order-cancel-confirmation.component';
import { RepairServiceHomepageComponent } from './shared/components/service-history/repair-service-homepage/repair-service-homepage.component';
import { ChooseDeviceModalComponent } from './shared/components/service-history/choose-device-modal/choose-device-modal.component';
import { ProductListingComponent } from './shared/components/products/product-listing/product-listing.component';
import { ProductDetailComponent } from './shared/components/products/product-detail/product-detail.component';


export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'about', component: AboutComponent},
    {path:'contact-us', component: ContactUsComponent},
    {path:'policy', component: PolicyComponent},
    {path:'login', component: LoginRegisterComponent},
    {path:'register', component: UserRegisterComponent},
    {path:'forgot-password', component: ForgotPasswordComponent},
    {path:'otp-verification', component: OtpVerificationComponent},
    {path:'success-screen', component: SuccessScreenComponent},
    {path:'cart', component: CartComponent},
    {path:'place-order', component:PlaceOrderComponent},
    {path:'add-new-address', component:AddNewAddressComponent},
    {path:'user-profile', component:UserProfileComponent},
    {path:'faq', component:FaqComponent},
    {path:'order-confirmed-details', component:OrderConfirmedDetailsComponent},
    {path:'order-tracking-status', component:OrderTrackingStatusComponent},
    {path:'order-history-product-details', component:OrderHistoryProductDetailsComponent},
    {path:'order-cancellation', component:OrderCancellationComponent},
    {path:'order-cancel-confirmation', component:OrderCancelConfirmationComponent},
    {path:'repair-service-homepage', component:RepairServiceHomepageComponent},
    {path:'choose-device-modal', component:ChooseDeviceModalComponent},
    {path:'choose-device-modal', component:ChooseDeviceModalComponent},
    {path:'category/smartphones', component: ProductListingComponent},
    {path:'category/smartphones/iphone/:id', component: ProductDetailComponent},
    {path:'product-detail', component: ProductDetailComponent}



];
