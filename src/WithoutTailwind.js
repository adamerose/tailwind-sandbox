import styled from "styled-components";

export function WithoutTailwind() {
  return (
    <StyledWrapper>
      <figure>
        <img
          src="https://tailwindcss.com/_next/static/media/sarah-dayan.de9b3815.jpg"
          alt=""
          width="384"
          height="512"
        />
        <div class="content">
          <blockquote>
            <p>
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption>
            <div class="name">Sarah Dayan</div>
            <div class="title">Staff Engineer, Algolia</div>
          </figcaption>
        </div>
      </figure>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  figure {
    display: flex;
    flex-direction: column;
    background-color: #f8fafc; // Slate 100
    border-radius: 1rem;
    padding: 2rem;

    @media (prefers-color-scheme: dark) {
      background-color: #2d3748; // Slate 800
    }

    @media (min-width: 768px) {
      // MD breakpoint
      flex-direction: row;
      padding: 0;
    }

    img {
      width: 6rem;
      height: 6rem;
      border-radius: 50%;
      margin: auto;

      @media (min-width: 768px) {
        // MD breakpoint
        width: 12rem;
        height: auto;
        border-radius: 0;
      }
    }

    .content {
      padding-top: 1.5rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      @media (min-width: 768px) {
        // MD breakpoint
        padding: 2rem;
        text-align: left;
      }

      blockquote p {
        font-size: 1.125rem;
        font-weight: 500;
      }

      figcaption {
        font-weight: 500;

        .name {
          color: #60a5fa; // Sky 500

          @media (prefers-color-scheme: dark) {
            color: #3b82f6; // Sky 400
          }
        }

        .title {
          color: #4b5563; // Slate 700

          @media (prefers-color-scheme: dark) {
            color: #374151; // Slate 500
          }
        }
      }
    }
  }
`;
