console.log('indeed is working again')

// it does not lose the changes on the screen
// upon changing the cods Hot Module Replacment
if(module.hot){
    module.hot.accept();
}