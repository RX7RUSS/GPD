var page_data = document.getElementById('page_details')

let addHTML = ""
for (var i = 0; i < 5; i++) {
	addHTML += '<span> <button>Button</button> </span>'
}

page_data.innerHTML = `

  <h3 class='title'> hello from DETAILS page </h3>
  <div>Something Else</div>
  ${addHTML}

`
