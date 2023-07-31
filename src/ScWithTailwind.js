import styled from "styled-components";

export function ScWithTailwind() {
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
  @apply md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800

  & > figure {
    & > img {
      @apply w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto;
    }

    & > .content {
      @apply pt-6 md:p-8 text-center md:text-left space-y-4

      & > blockquote > p {
        @apply text-lg font-medium;
      }

      & > figcaption {
        & > .name {
          @apply font-medium text-sky-500 dark:text-sky-400;
        }

        & > .title {
          @apply font-medium text-slate-700 dark:text-slate-500;
        }
      }
    }
  }
`;
