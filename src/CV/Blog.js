import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import profileImage from './images/profile-image.jpg';
import profileImage2 from './images/profile-image2.jpeg';
import companyLogo from './images/company-logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';


const employees = [
  {
    name: 'Cumali Oğuz',
    image: profileImage,
    github: 'https://github.com/cumalioguz',
    email: 'cumalioguz1@gmail.com',
  },
  {
    name: 'Berat Sevim',
    image: profileImage2,
    github: 'https://github.com/beratsevim',
    email: 'berat.svm@hotmail.com',
  },
];

function Blog() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="section">
            <h2>Profile</h2>
            <p>Merhaba! Biz, profesyonel bir web ve mobil uygulama geliştirme ekibi olarak buradayız. İşinizi dijital dünyada öne çıkarmak ve kullanıcıların dikkatini çekmek için birlikte çalışma fırsatı sunuyoruz. Ekibimiz, tutkulu ve deneyimli bireylerden oluşuyor. Hem web hem de mobil uygulama geliştirme konusunda uzmanız ve her bir projede en iyi sonuçları elde etmek için birlikte çalışıyoruz.</p>

            <p>Web geliştirmede, HTML, CSS ve JavaScript gibi temel dilleri kullanırken, aynı zamanda popüler çerçeveler ve kütüphaneler olan React ve Angular gibi teknolojilere de hakimiz. Bu sayede, modern, kullanıcı dostu ve duyarlı web siteleri oluşturmak için gereken beceri ve bilgiye sahibiz.</p>

            <p>Mobil uygulama geliştirme konusunda da güçlüyüz. iOS ve Android platformlarında uzmanlaşmışız. React Native ile mobil uygulamalar geliştiriyoruz, React Native, hem iOS hem de Android platformlarında çalışabilen tek bir kod tabanıyla geliştirme yapmamı sağlıyor. Bu, daha hızlı bir geliştirme süreci ve maliyet tasarrufu sağlarken, uygulamalarımın performansını ve kullanılabilirliğini en üst düzeye çıkarıyorum. Kotlin ve Java ile Android uygulamaları oluşturuyoruz. Kullanıcıların mobil cihazlarda sorunsuz bir deneyim yaşamasını sağlamak için güncel teknolojileri ve en iyi uygulamaları takip ediyoruz.</p>

            <p>Ekibimiz ayrıca veritabanı yönetimi, API entegrasyonu, güvenlik önlemleri ve performans optimizasyonu gibi konularda da uzmanlık sağlıyor. Projelerinizi her aşamasında aktif bir şekilde yönetiyoruz ve ihtiyaçlarınızı anlayarak size özel çözümler sunuyoruz.</p>

            <p>İşbirliği felsefemiz, müşterilerimizle yakın bir ilişki kurmak ve proje sürecinde sürekli iletişim halinde olmaktır. Müşteri memnuniyetini en üst düzeyde tutmak için projelerinizi zamanında ve bütçeye uygun bir şekilde tamamlamaya özen gösteriyoruz.</p>

            <p>Bizimle çalışarak işinizi büyütebilir, dijital varlığınızı güçlendirebilir ve hedef kitlenizi etkileyebilirsiniz. İşinizi daha da ileri taşımak için bize katılın ve size nasıl yardımcı olabileceğimizi keşfedin.</p>


          </div>
        </Col>
      </Row>

      <Row>
        <Col className="text-center">
          <div className="company-info" id="companyInfo">
            <Image
              src={companyLogo}
              alt="Company Logo"
              className="company-logo"
              style={{
                width: '200px',
                height: '200px',
                objectFit: 'cover',
                marginBottom: '20px',
                marginTop: '80px',
              }}
            />
            <h1 className="text-center" style={{ marginBottom: '20px' }}>Digi Illusionists</h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="employee-section" id="employees" style={{ marginTop: '30px' }}>
            <div className="d-flex justify-content-center">
              {employees.map((employee, index) => (
                <Card className="mb-4 employee-card" key={index} style={{ width: '18rem', marginRight: '15px' }}>
                  <Card.Body>
                    <Row>
                      <Col md={12} className="text-center">
                        <div className="employee">
                          <Image
                            src={employee.image}
                            alt="Employee"
                            className="employee-image rounded-circle"
                            style={{
                              width: '200px',
                              height: '200px',
                              objectFit: 'cover'
                            }}
                          />
                          <h5 className="employee-name" style={{ fontSize: '1.4rem', marginTop: '15px' }}>{employee.name}</h5>
                          <p className="employee-icons" style={{ marginTop: '15px' }}>
                            <a href={employee.github} target="_blank" rel="noopener noreferrer">
                              <FontAwesomeIcon icon={faGithub} size="2x" style={{ marginRight: '10px', color: 'purple' }} />
                            </a>
                            <a href={`mailto:${employee.email}`}>
                              <FontAwesomeIcon icon={faEnvelopeSquare} size="2x" style={{ marginLeft: '10px', color: 'purple' }} />
                            </a>
                          </p>

                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        </Col>
      </Row>


    </Container>
  );
}

export default Blog;