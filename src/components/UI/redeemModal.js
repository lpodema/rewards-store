import { Button, Box } from "@material-ui/core";
import { Dialog } from "@material-ui/core";

const RedeemProductModal = (props) => {
    const [product, redeeming] = props.product;
    return (
        <Dialog
            open={props.open}
            onClose={() => props.onClose(false)}
            {...props}
            PaperProps={{
                style: {
                    backgroundColor: "white",
                    boxShadow: "none",
                    height: 100,
                    padding: 30,
                },
            }}>
            <Box style={{ padding: "2rem", paddingTop: "2rem" }}>
                <Button
                    style={{ width: "100%" }}
                    variant='contained'
                    color='secondary'
                    onClick={() => redeeming(product._id)}>
                    Get {product.name}!
                </Button>
            </Box>
        </Dialog>
    );
};

export default RedeemProductModal;
