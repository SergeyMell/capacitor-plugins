import '@nativescript/capacitor/bridge';

export const rateMyApp = () => {
    if (native.isAndroid) {
        console.log('Android action called')
    } else if (native.isIOS) {
        SKStoreReviewController.requestReview()
    } else {
        throw new Error('Unsupported platform');
    }
}
