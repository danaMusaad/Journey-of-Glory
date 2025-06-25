import React from 'react';
import './Achievements.css';

const Achievements = () => {
  return (
    <section className="timeline-section" id="achievements">
      <h2 className="timeline-title"> إنجازات حكام المملكة العربية السعودية</h2>
      <div className="timeline-container">

        {/* الملك عبدالعزيز */}
        <div className="timeline-item left">
          <div className="timeline-content">
            <h3 className="king-name">الملك عبدالعزيز بن عبدالرحمن</h3>
            <span className="achievement-date">1932</span>
            <p className="achievement-text">
              توحيد المملكة تحت راية واحدة، وتأسيس الدولة السعودية الحديثة، وبناء مؤسساتها الإدارية والقضائية على أساس الشريعة الإسلامية.
            </p>
          </div>
        </div>

        {/* الملك سعود */}
        <div className="timeline-item right">
          <div className="timeline-content">
            <h3 className="king-name">الملك سعود بن عبدالعزيز</h3>
            <span className="achievement-date">1957</span>
            <p className="achievement-text">
              تأسيس أول جامعة في المملكة (جامعة الملك سعود)، والتوسع في بناء المستشفيات والمدارس والبعثات التعليمية للخارج.
            </p>
          </div>
        </div>

        {/* الملك فيصل */}
        <div className="timeline-item left">
          <div className="timeline-content">
            <h3 className="king-name">الملك فيصل بن عبدالعزيز</h3>
            <span className="achievement-date">1973</span>
            <p className="achievement-text">
              استخدام النفط كسلاح سياسي خلال حرب أكتوبر، وتعزيز دور المملكة الإسلامي والعربي، وتطوير التعليم والنقل والطاقة.
            </p>
          </div>
        </div>

        {/* الملك خالد */}
        <div className="timeline-item right">
          <div className="timeline-content">
            <h3 className="king-name">الملك خالد بن عبدالعزيز</h3>
            <span className="achievement-date">1975 - 1982</span>
            <p className="achievement-text">
              ازدهار اقتصادي كبير بسبب ارتفاع أسعار النفط، وتوسيع مشاريع البنية التحتية والتعليم والصحة في جميع مناطق المملكة.
            </p>
          </div>
        </div>

        {/* الملك فهد */}
        <div className="timeline-item left">
          <div className="timeline-content">
            <h3 className="king-name">الملك فهد بن عبدالعزيز</h3>
            <span className="achievement-date">1986</span>
            <p className="achievement-text">
              افتتاح مجمع الملك فهد لطباعة المصحف الشريف، وتطوير القطاعات التعليمية والصحية، وإطلاق خطة التنمية الخمسية الشاملة.
            </p>
          </div>
        </div>

        {/* الملك عبدالله */}
        <div className="timeline-item right">
          <div className="timeline-content">
            <h3 className="king-name">الملك عبدالله بن عبدالعزيز</h3>
            <span className="achievement-date">2005 - 2015</span>
            <p className="achievement-text">
              إطلاق برنامج الابتعاث الخارجي، وتأسيس الجامعات الجديدة، ومبادرات الإسكان، وتمكين المرأة في العمل والتعليم.
            </p>
          </div>
        </div>

        {/* الملك سلمان */}
        <div className="timeline-item left">
          <div className="timeline-content">
            <h3 className="king-name">الملك سلمان بن عبدالعزيز</h3>
            <span className="achievement-date">2016 - الآن</span>
            <p className="achievement-text">
              إطلاق رؤية السعودية 2030، وتحول اقتصادي واجتماعي شامل، وتقدم كبير في مجالات الترفيه، التقنية، وتمكين الشباب والمرأة.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Achievements;
