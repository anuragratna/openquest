import { Link } from 'react-router-dom';
import { FaBuildingColumns, FaLaptopCode, FaCartShopping, FaLeaf } from 'react-icons/fa6';
import { industries } from '../data/content';
import './Industries.css';

const iconMap = {
    FaBuildingColumns: FaBuildingColumns,
    FaLaptopCode: FaLaptopCode,
    FaCartShopping: FaCartShopping,
    FaLeaf: FaLeaf,
};

const Industries = () => {
    return (
        <section id="industries" className="industries-section">
            <div className="container">
                <h2 className="section-title">Industry Expertise</h2>
                <div className="industries-grid">
                    {industries.map((industry) => {
                        const IconComponent = iconMap[industry.icon];
                        return (
                            <div key={industry.id} className="industry-card">
                                <div className="industry-icon">
                                    {IconComponent && <IconComponent />}
                                </div>
                                <h3>{industry.title}</h3>
                                <p>{industry.description}</p>
                                <Link to={industry.link} className="learn-more-link">Learn More →</Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Industries;
