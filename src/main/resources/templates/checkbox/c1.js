//testok
/**
 * how to use it?
 * bind the chooseOrUnpickup funciton to the checkbox or some button(button use chooseOrUnpickupOnBtn())~

 <ul>
 <li><input type="checkbox" name="ids" value="funnyBox" onclick="chooseOrUnpickup()">0</li>
 <li><input type="checkbox" name="ids">1</li>
 <li><input type="checkbox" name="ids">2</li>
 <li><input type="checkbox" name="ids">3</li>
 <li><input type="checkbox" name="ids">4</li>
 </ul>

 <button id="btn5" onclick="chooseOrUnpickupOnBtn()">button5(chooseOrUnpickup)</button>

 */
let cpFlag = 0;
function chooseOrUnpickupOnBtn(){
    console.log("cpFlag:"+cpFlag)
    if(cpFlag==0){
        chooseCbox();
        cpFlag=1
    }else{
        unpickCbox();
        cpFlag=0
    }
}

function chooseOrUnpickup(){
    //what is the checkbox index 0 checked is , the follow checkbox is the same
    //testok
    // console.log("all checkbox length:"+$('input[type=checkbox]').length)
    // console.log($('input[type=checkbox]')[0].value)
    // console.log($('input:checkbox:checked').length)
    // console.log($('input[type=checkbox]')[0].checked)

    //then I will let the checkbox implements toggle model

    //if element checkbox at position 0 index and it already checked,
    // then release them all to unchecked (but onclick event function is otherwise)
    if (($('input[type=checkbox]')[0].checked)){
        chooseCbox();
    }else{
        unpickCbox();
    }
}

function chooseCbox(){
    console.log($('input[type=checkbox]').length)
    console.log("chooseCbox")
    $.each($('input:checkbox'),function(){
        // let checkBoxArr = $('input[type=checkbox]');
        $(this).prop("checked", true);
    })
}


function unpickCbox(){
    console.log($('input[type=checkbox]').length)
    console.log("unpickCbox")
    $.each($('input:checkbox'),function(){
        // let checkBoxArr = $('input[type=checkbox]');
        $(this).removeAttr("checked");
    })
}