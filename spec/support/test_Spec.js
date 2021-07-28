describe("A suite is just a function", function() {
    var a;
  
    it("and so is a spec", function() {
      a = false;
      expect(a).toBe(false);
    });

    it("Div 2 numbers", function() {  
      b = 45;
      expect(15).toBe(b / 3);
    });

  });