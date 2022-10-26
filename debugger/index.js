const 모듈 = () => {
  let 모듈_지역변수 = 10;

  const a = () => {
    const a_지역변수 = "a";

    모듈_지역변수++;
  };

  const b = () => {
    const b_지역변수 = "b";

    모듈_지역변수++;
  };

  const c = () => {
    const c_지역변수 = "c";

    모듈_지역변수++;
  };

  const d = () => {
    const d_지역변수 = "d";

    모듈_지역변수++;
  };

  return {
    a,
    b,
    c,
    d,
  };
};

const { a, b, c, d } = 모듈();

a();
b();
c();
d();
