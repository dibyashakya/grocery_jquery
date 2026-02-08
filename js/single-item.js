function createSingleItem(item){
    var $div = $(`<div class="single-item"></div>`)

    $div.html(`<input type="radio" checked>
                    <p style="text-decoration:none">Rice</p>
                    <button class="btn icon=btn edit-btn" type="button">
                        <i class="fa-regular fa-pen-to-square"></i>
                    </button>
                    <button class="btn icon=btn remove-btn" type="button">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>`)
                    return $div;
}