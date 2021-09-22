'use strict';



/**
 * 
 * 
Our price table and offers: 
+------+-------+----------------+
| Item | Price | Special offers |
+------+-------+----------------+
| A    | 50    | 3A for 130     |
| B    | 30    | 2B for 45      |
| C    | 20    |                |
| D    | 15    |                |
+------+-------+----------------+
 * 
 * 
 *  
 */


//noinspection JSUnusedLocalSymbols
module.exports = function (skus) {
    console.log(skus);
   
    var result = -1;
    
    // create a map and populate it with SKUs
    const skuMap = new Map();
    skuMap.set('A', 50);
    skuMap.set('B', 30);
    skuMap.set('C', 20);
    skuMap.set('D', 15);
    
    // loop through input and add to end result
    for( const i of skus) {

    }


    return 5;
};