import React, { useEffect, useContext } from "react";
import './Verify.css';
import { useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";
import { toast } from "react-toastify";

function Verify() {
    const [searchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
    const { url } = useContext(StoreContext);
    const navigate = useNavigate();

    useEffect(() => {

        if (!success || !orderId) {
            toast.error("Invalid payment verification data.");
            return navigate("/");
        }

        const PaymentVerification = async () => {
            try {
                const response = await axios.post(`${url}/api/order/verify`, {
                    success,
                    orderId,
                });

                

                if (response.data.success) {
                    toast.success("Payment verified!");
                    navigate("/myorder");
                } else {
                    toast.error("Payment failed.");
                    navigate("/");
                }
            } catch (error) {
                console.error("❌ Axios error:", error);
                if (error.response) {
                    console.error("🔴 Server responded with:", error.response.data);
                    toast.error(error.response.data.message || "Verification failed.");
                } else {
                    toast.error("Network/server error.");
                }
                navigate("/");
            }
        };

        PaymentVerification();
    }, []);

    return (
        <div className="verify">
            <div className="spinner"></div>
        </div>
    );
}

export default Verify;
