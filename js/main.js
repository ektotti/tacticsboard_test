document.addEventListener('DOMContentLoaded', function(){
    const pm = new OnClickMove('.player');
    pm.move();
    
    const bm = new OnClickMove('.ball');
    bm.move();
});