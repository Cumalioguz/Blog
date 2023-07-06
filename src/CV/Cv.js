import React from 'react';
import { Container, Row, Col, Image, Tab, Tabs } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Cv.css'

import profileImage from './images/profile-image.jpg';
import mekanbulImage from './images/mekanbul-image.jpg';
import carprojectImage from './images/carproject-image.jpg';
import graduationImage from './images/graduation-image.jpg';
import parlakgelecekImage from './images/parlakgelecek-image.jpg';
import azureprojectImage from './images/azureproject-image.jpg';

function Cv() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Container className="cv-container">
            <Row>
                <Col lg={4}>
                    <div className="profile">
                        <Image
                            src={profileImage}
                            alt="Profile"
                            className="profile-image rounded-circle"
                            style={{
                                width: '200px',
                                height: '200px',
                                objectFit: 'cover',
                                borderRadius: '50%',
                                marginBottom: '20px'
                            }}
                        />
                        <div className="personal-info">
                            <h1>Cumali Oğuz</h1>
                            <h2>Bilgisayar Mühendisi</h2>
                            <p>
                                cumalioguz1@gmail.com
                                <br />
                                +90 536 241 1948
                                <br />
                                <a href="https://github.com/Cumalioguz" style={{ color: '#F8B195' }}>
                                    https://github.com/Cumalioguz
                                </a>
                                <br />
                                <a href="https://www.linkedin.com/in/cumali-oguz-337ab6201" style={{ color: '#F8B195' }}>
                                    in/cumali-oguz-337ab6201
                                </a>
                                <br />
                                Mersin, Türkiye
                            </p>
                        </div>
                    </div>
                </Col>
                <Col lg={8}>
                    <div className="section">
                        <h2>Profile</h2>
                        <p>Merhaba! Biz, profesyonel bir web ve mobil uygulama geliştirme ekibi olarak buradayız. İşinizi dijital dünyada öne çıkarmak ve kullanıcıların dikkatini çekmek için birlikte çalışma fırsatı sunuyoruz. Ekibimiz, tutkulu ve deneyimli bireylerden oluşuyor. Hem web hem de mobil uygulama geliştirme konusunda uzmanız ve her bir projede en iyi sonuçları elde etmek için birlikte çalışıyoruz.</p>

<p>Web geliştirmede, HTML, CSS ve JavaScript gibi temel dilleri kullanırken, aynı zamanda popüler çerçeveler ve kütüphaneler olan React ve Angular gibi teknolojilere de hakimiz. Bu sayede, modern, kullanıcı dostu ve duyarlı web siteleri oluşturmak için gereken beceri ve bilgiye sahibiz.</p>

<p>Mobil uygulama geliştirme konusunda da güçlüyüz. iOS ve Android platformlarında uzmanlaşmışız. React Native ile mobil uygulamalar geliştiriyoruz, React Native, hem iOS hem de Android platformlarında çalışabilen tek bir kod tabanıyla geliştirme yapmamı sağlıyor. Bu, daha hızlı bir geliştirme süreci ve maliyet tasarrufu sağlarken, uygulamalarımın performansını ve kullanılabilirliğini en üst düzeye çıkarıyorum. Kotlin ve Java ile Android uygulamaları oluşturuyoruz. Kullanıcıların mobil cihazlarda sorunsuz bir deneyim yaşamasını sağlamak için güncel teknolojileri ve en iyi uygulamaları takip ediyoruz.</p>

<p>Ekibimiz ayrıca veritabanı yönetimi, API entegrasyonu, güvenlik önlemleri ve performans optimizasyonu gibi konularda da uzmanlık sağlıyor. Projelerinizi her aşamasında aktif bir şekilde yönetiyoruz ve ihtiyaçlarınızı anlayarak size özel çözümler sunuyoruz.</p>

<p>İşbirliği felsefemiz, müşterilerimizle yakın bir ilişki kurmak ve proje sürecinde sürekli iletişim halinde olmaktır. Müşteri memnuniyetini en üst düzeyde tutmak için projelerinizi zamanında ve bütçeye uygun bir şekilde tamamlamaya özen gösteriyoruz.</p>

<p>Bizimle çalışarak işinizi büyütebilir, dijital varlığınızı güçlendirebilir ve hedef kitlenizi etkileyebilirsiniz. İşinizi daha da ileri taşımak için bize katılın ve size nasıl yardımcı olabileceğimizi keşfedin.</p>

                        
                    </div>
                    
                    
                    <div className="section">
                        <h2>Projeler</h2>
                        <Tabs defaultActiveKey="mekanbul" id="projects-tabs">
                            <Tab eventKey="mekanbul" title="MekanBul">
                                <div className="project-details">
                                    <Slider {...settings}>
                                        <div>
                                            <Image src={mekanbulImage} alt="MekanBul" className="project-image" />
                                            <p>Using React (MERN), I created a site for finding a place.</p>
                                        </div>
                                        <div>
                                            <Image src={mekanbulImage} alt="MekanBul" className="project-image" />
                                            <p>Using React (MERN), I created a site for finding a place.</p>
                                        </div>
                                        <div>
                                            <Image src={mekanbulImage} alt="MekanBul" className="project-image" />
                                            <p>Using React (MERN), I created a site for finding a place.</p>
                                        </div>
                                        {/* Diğer resimleri buraya ekleyin */}
                                    </Slider>
                                </div>
                            </Tab>
                            <Tab eventKey="carproject" title="CarProject">
                                <div className="project-details">
                                    <Slider {...settings}>
                                        <div>
                                            <Image src={carprojectImage} alt="CarProject" className="project-image" />
                                            <p>I made CarProject website using .Net.</p>
                                        </div>
                                        {/* Diğer resimleri buraya ekleyin */}
                                    </Slider>
                                </div>
                            </Tab>
                            <Tab eventKey="graduation" title="Project for Graduation">
                                <div className="project-details">
                                    <Slider {...settings}>
                                        <div>
                                            <Image src={graduationImage} alt="Project for Graduation" className="project-image" />
                                            <p>Using React-Native, I'm creating a mobile application.</p>
                                        </div>
                                        {/* Diğer resimleri buraya ekleyin */}
                                    </Slider>
                                </div>
                            </Tab>
                            <Tab eventKey="parlakgelecek" title="ParlakGelecek">
                                <div className="project-details">
                                    <Slider {...settings}>
                                        <div>
                                            <Image src={parlakgelecekImage} alt="ParlakGelecek" className="project-image" />
                                            <p>I made a Job site using HTML-CSS-Javascript.</p>
                                        </div>
                                        {/* Diğer resimleri buraya ekleyin */}
                                    </Slider>
                                </div>
                            </Tab>
                            <Tab eventKey="azureproject" title="AzureProject">
                                <div className="project-details">
                                    <Slider {...settings}>
                                        <div>
                                            <Image src={azureprojectImage} alt="AzureProject" className="project-image" />
                                            <p>My project to improve myself in Azure.</p>
                                        </div>
                                        <div>
                                            <Image src={azureprojectImage} alt="AzureProject" className="project-image" />
                                            <p>Diğer resimlerin açıklamalarını buraya ekleyin.</p>
                                        </div>
                                        <div>
                                            <Image src={azureprojectImage} alt="AzureProject" className="project-image" />
                                            <p>Diğer resimlerin açıklamalarını buraya ekleyin.</p>
                                        </div>
                                        {/* Diğer resimleri buraya ekleyin */}
                                    </Slider>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>

                    <div className="section">
                        <h2>Skills</h2>
                        <div>
                            <p>
                                <strong>Web Frontend Development:</strong> I have good experience in HTML/CSS/Bootstrap technologies.
                            </p>
                            <p>
                                <strong>Web Backend Development:</strong> I have worked with .Net and Node.js for backend development.
                            </p>
                            <p>
                                <strong>Database Management:</strong> I have experience with SQL and MongoDB.
                            </p>
                            <p>
                                <strong>Mobile Development:</strong> I have worked with React Native for mobile application development.
                            </p>
                            <p>
                                <strong>Cloud Technologies:</strong> I have knowledge of Microsoft Azure services.
                            </p>
                            <p>
                                <strong>Version Control:</strong> I am familiar with Git and GitHub.
                            </p>
                            <p>
                                <strong>Problem Solving:</strong> I have strong analytical and problem-solving skills.
                            </p>
                            <p>
                                <strong>Languages:</strong> Turkish (Native), English (Intermediate)
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Cv;
