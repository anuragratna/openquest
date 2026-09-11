import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { services } from '../data/content';
import './ServiceDetail.css';

const ServiceDetail = () => {
    const { id } = useParams();
    const service = services.find(s => s.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!service) {
        return <div className="not-found">Service not found</div>;
    }

    // Use a default image if none is provided
    const heroImage = service.image || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80";

    return (
        <div className="service-detail-page">
            <div className="service-header" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="service-header-overlay"></div>
                <div className="container">
                    <Link to="/#services" className="back-link">&larr; Back to Services</Link>
                    <h1 className="service-detail-title">{service.title}</h1>
                </div>
            </div>
            <div className="container service-body">
                {service.content ? (
                    <div className="service-content" dangerouslySetInnerHTML={{ __html: service.content }}></div>
                ) : (
                    <div className="service-content">
                        <p className="service-description">{service.description}</p>
                        <p>More details coming soon.</p>
                    </div>
                )}
                
                <div className="service-cta">
                    <h3>Ready to get started?</h3>
                    <Link to="/#contact" className="cta-button">Contact Us Today</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
