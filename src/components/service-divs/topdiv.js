import styles from "@/components/service-divs/service.module.css";
import Image from 'next/image';

export default function Topdiv() {
    return(
        <div className={styles.topDiv}>
            <h2>Our Services</h2>
            <p>Services we render to ensure our users enjoy seamless search of desired properties in different <br/> locations across Nigeria within their budgets.</p>

            <div className={styles.flexContainer}>
               <div className={styles.flexDiv}>
                <Image src="/images/unsplash3.png" alt="picture of car infront of a building" width={387} height={222} />
                <h4>Residential Houses For Rent</h4>
                <p>You can easily access available residential apartments <br /> up for rent in your favourite location.</p>
               </div>

               <div className={styles.flexDiv}>
                <Image src="/images/unsplash4.png" alt="picture of white building" width={376} height={222}/>
                <h4>Corporate And Commercial Houses</h4>
                <p>You can easily access available office spaces <br /> up for rent in your favourite location.</p>
               </div>

               <div className={styles.flexDiv}>
                <Image src="/images/unsplash5.png" alt="picture of a house" width={387} height={222}/>
                <h4>Houses For Sale</h4>
                <p>You can access houses ready for sale in <br /> all locations across Nigeria.</p>
               </div>

            </div>
        </div>
    );
}