export function checkWin(correct, wrong, word){
    let status = 'win';

    //check for win
    word.split('').forEach(alphabet => {
        if(!correct.includes(alphabet)){
            status='';
        }
    });

    //check loss
    if(wrong.length===6) status='lose';
    return status;
}