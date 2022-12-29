

const  indexView = (req,res,next)=>{
    res.render('home')
}
const  tablesView = (req,res,next)=>{
    res.render('table')
}

const  billingView = (req,res,next)=>{
    res.render('billing')
}

const  virtualrealityView = (req,res,next)=>{
    res.render('virtualreality')
}

const  rtlView = (req,res,next)=>{
    res.render('rtl')
}





module.exports = {
    indexView,
    tablesView,
    billingView,
    virtualrealityView,
    rtlView

}