package ch02;

class SuperClass {
	SuperClass(){ 
		System.out.print("super");
	}
}

class SubClass extends SuperClass {
	SubClass(){ System.out.print("Sub");
	}
}


public class sujebi {

	public static void main(String[] args) {
		SuperClass s = new SubClass();

	}

}