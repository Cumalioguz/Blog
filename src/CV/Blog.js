import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import profileImage from './images/profile-image.jpg';

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
        <Col>
          <Card className="mb-4">
            <Card.Body>
              <Row>
                <Col md={4}>
                  <Image
                    src={profileImage}
                    alt="Profile"
                    className="profile-image rounded-circle"
                    style={{
                      width: '200px',
                      height: '200px',
                      objectFit: 'cover',
                    }}
                  />
                </Col>
                <Col md={8}>
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
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Row>
                <Col md={4}>
                  <Image
                    src={profileImage}
                    alt="Profile"
                    className="profile-image rounded-circle"
                    style={{
                      width: '200px',
                      height: '200px',
                      objectFit: 'cover',
                    }}
                  />
                </Col>
                <Col md={8}>
                  <div className="personal-info">
                    <h1>John Doe</h1>
                    <h2>Web Developer</h2>
                    <p>
                      johndoe@example.com
                      <br />
                      +1 234 567 890
                      <br />
                      <a href="https://github.com/johndoe" style={{ color: '#F8B195' }}>
                        https://github.com/johndoe
                      </a>
                      <br />
                      <a href="https://www.linkedin.com/in/johndoe" style={{ color: '#F8B195' }}>
                        in/johndoe
                      </a>
                      <br />
                      New York, USA
                    </p>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Blog;
