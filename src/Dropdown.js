

const Dropdown = ({list}) => {

    console.log('inside drop:'+list);
    const products = [
        { name: 'Product 1', id: 'p1'},
        { name: 'Product 2', id: 'p2' },
        { name: 'Product 3', id: 'p3'},
        { name: 'Product 4', id: 'p4' },
    ]


    
    return ( 
        <div>
            {/* {list.map((item)=>(
                <div key={item.name}>{item.name}</div>
            ))} */}
        </div>
     );
}
 
export default Dropdown;