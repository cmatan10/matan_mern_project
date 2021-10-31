import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {GlobalState} from '../../../../GlobalState'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';

function BtnRender({product, deleteProduct}) {
    const state = useContext(GlobalState)
    const [isAdmin] = state.userAPI.isAdmin
    const addCart = state.userAPI.addCart
    
    return (
        <div className="row_btn">
            {
                isAdmin ? 
                <>
                    <Link id="btn_buy" to="#!" 
                    onClick={() =>deleteProduct(product._id, product.images.public_id)}>
                        <DeleteForeverIcon color="primary"/>
                    </Link>
                    <Link id="btn_view" to={`/edit_product/${product._id}`}>
                    <ModeEditOutlineRoundedIcon color="primary"/>
                    </Link>
                </>
                : <>
                    <Link id="btn_buy" to="#!" onClick={() => addCart(product)}>
                    <AddShoppingCartIcon color="primary"/>
                    </Link>
                    <a href={`/detail/${product._id}`} id="btn_view" >
                        <VisibilityRoundedIcon color="primary"/>
                    </a>
                </>
            }
                
        </div>
    )
}

export default BtnRender
