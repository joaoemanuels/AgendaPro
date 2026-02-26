import "./testimonials-booking.styles.css";

function TestimonialsSection() {
  return (
    <section className="testimonials">
      <h2>O que nossos alunos dizem</h2>

      <div className="testimonials-container">
        <div className="testimonial-card">
          <div className="stars">★★★★★</div>
          <p>
            Vou para o segundo mês com o Filipe e o que eu posso dizer até agora
            é só elogios. Explica certinho os treinos, troca exercícios quando
            necessário e responde rápido.
          </p>
          <div className="testimonial-author">
            <strong>Ayslan Diego</strong>
            <span>Buenos Aires - Argentina</span>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="stars">★★★★★</div>
          <p>
            Ficha de treinos bem planejada e objetiva, com aplicativo que ajuda
            muito na execução. Suporte rápido e atencioso.
          </p>
          <div className="testimonial-author">
            <strong>João Victor</strong>
            <span>Salvador - Bahia</span>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="stars">★★★★★</div>
          <p>
            Ótimo profissional e super atencioso. Esclarece todas as dúvidas e
            atende da melhor forma possível. Já fechei o plano trimestral!
          </p>
          <div className="testimonial-author">
            <strong>Camila Barros</strong>
            <span>Rondonópolis - Mato Grosso</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
