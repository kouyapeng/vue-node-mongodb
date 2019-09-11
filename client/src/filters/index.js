
const vfilter={
    toSixString(val){
        var len = 0;
        for (var i = 0; i < val.length; i++) {
             var a = val.charAt(i);
             if (a.match('/[^\x00-\xff]/ig') != null) 
            {
                len += 2;
            }
            else
            {
                len += 1;
            }
        }
        
        if(len >9) return val = val.substring(0,9) + '...';
        else return val;
    }
}
export default vfilter;