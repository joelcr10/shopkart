

const Dropdown = (List) => {

    console.log('inside drop:'+List);
    const products = [
        { name: 'Product 1', id: 'p1'},
        { name: 'Product 2', id: 'p2' },
        { name: 'Product 3', id: 'p3'},
        { name: 'Product 4', id: 'p4' },
    ]
    
    return ( 
        <div>
            {/* {productList.map((item)=>(
                <div key={item.name}>{item.name}</div>
            ))} */}
        </div>
     );
}
 
export default Dropdown;