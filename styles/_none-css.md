.app__output {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: rgba(221, 221, 221, 0.5); */
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}

.app__output--content {
  width: 90%;
  height: 90%;
  background: rgb(241, 241, 241);
  border-radius: 1.8rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.app__result--left {
  text-align: right;
}

.app__scan--wrap,
.app__matched--wrap {
  display: flex;
  justify-content: flex-end;
}

.app__result {
  padding: 2rem;
  /* width: min-content; */
  display: grid;
  grid-template-columns: 1fr 5.5fr 1fr;
  gap: 4rem;
}

.app__scan {
  margin-bottom: 2.4rem;
}
.app__scan,
.app__matched {
  text-align: right;
}

.app__execution,
.app__scrambled {
  text-align: left;
}

.app__scan--wrap,
.app__matched--wrap {
  display: flex;
  align-items: flex-end;
}

.app__execution--wrap,
.app__scrambled--wrap {
  display: flex;
  align-items: flex-end;
}

.app__scan--wrap .app__scan--text,
.app__matched--wrap .app__matched--text {
  font-size: 1.4rem;
  line-height: 1.4rem;
  margin-right: 1rem;
  text-transform: uppercase;
}

.app__execution--wrap .app__execution--text,
.app__scrambled--wrap .app__scrambled--text {
  font-size: 1.4rem;
  line-height: 1.4rem;
  margin-left: 1rem;
  text-transform: uppercase;
}

.app__scan--wrap i,
.app__matched--wrap i {
  font-size: 3rem;
}

.app__execution--wrap i,
.app__scrambled--wrap i {
  font-size: 3rem;
}

.app__scan--number,
.app__matched--number {
  font-size: 5rem;
}

.app__execution--number,
.app__scrambled--number {
  font-size: 5rem;
}

.icon--green {
  color: var(--primary-color);
}

.icon--blue {
  color: var(--secondary-color);
}

.app__result--textarea {
  width: 100%;
  border: 1px solid #dadce0;
  border-radius: 1.8rem;
  padding: 2rem;
  font-size: 1.4rem;
  line-height: 1.4rem;
  resize: none;

  display: inline-block;
  overflow: auto;
}

.app__result--textarea::-webkit-scrollbar {
  display: none;
}

.app__result--textarea:focus {
  outline: 1.5px solid var(--primary-color);
  font-size: 1.8rem;
  color: #000;
}

/* style placeholder */
.app__result--textarea::placeholder {
  color: #000;
  font-size: 1.8rem;
  line-height: 2.5rem;
  text-align: justify;
  padding: 4rem 2rem;
}

.app__result--btnContainer {
  text-align: right;
  padding-right: 4rem;
  margin-top: -24rem;
}

.app__result--btn {
  /* color: #fff; */
  border: none;
  border-radius: 30rem;
  padding: 0.6rem;
  font-size: 1.4rem;
  line-height: 1.4rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  outline: none;
  background-color: transparent;
}

.app__result--share {
  margin-top: 5rem;
  text-align: center;
}

.app__result--share--text {
  margin-bottom: 2rem;
}

.app__result--share--icons > * {
  font-size: 2.5rem;
  cursor: pointer;
}

.app__result--share--icons > *:hover {
  color: var(--secondary-color);
}
.app__result--share--icons > *:not(:last-child) {
  margin-right: 1rem;
  transition: all 0.3s ease-in-out;
}