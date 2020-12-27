// CreateTabs ----------------------------------------------------------------------------
function createTabs(tab, blockOfTabs, tabContent){

    let tabs = document.querySelectorAll(tab),
    info = document.querySelector(blockOfTabs),
    tabContents = document.querySelectorAll(tabContent);
  
  function hideTabContent(a){
    for(let i = a; i < tabContents.length; i++ ){
        tabContents[i].classList.remove('show');
        tabContents[i].classList.add('hide');
    }
  }
  
  hideTabContent(1);
  
  function showTabContent(b){
    if(tabContents[b].classList.contains('hide')){
        tabContents[b].classList.add('show');
        tabContents[b].classList.remove('hide');
    }
  }
  info.addEventListener('click', function(event){ 
      let target = event.target;
    if(target && target.classList.contains('info-header-tab')){
        for(let i = 0; i < tabs.length; i++){
            if(target == tabs[i]){
                hideTabContent(0);
                showTabContent(i);
                break;
            }
        }
    }
  });
  }
  
  createTabs('.info-header-tab','.info-header','.info-tabcontent');