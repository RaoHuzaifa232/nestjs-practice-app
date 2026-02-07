# Code Citations

## License: GPL-3.0
https://github.com/AgentosUA/petfinder-api-university/blob/7d5d96556523dd084a918c9ef5e5164d56d7faec/src/auth/auth.controller.ts

```
# 🔴 Security Issues Found

Here are the critical security vulnerabilities in your auth and user modules:

## **Critical Issues**

### 1. **Hardcoded JWT Secret** ⚠️
**File:** `jwt.strategy.ts`
```
secretOrKey: process.env.JWT_SECRET || 'secret123',
```
**Risk:** If `JWT_SECRET` is not set, it defaults to `'secret123'` - anyone can forge tokens.

**Fix:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\jwt.strategy.ts
constructor() {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('JWT_SECRET environment variable is not set');
    }
    super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: secret,
    });
}
````

---

### 2. **No Input Validation** ⚠️
**Files:** `auth.controller.ts`, `user.controller.ts`

**Risk:** No validation on email format, password strength, or injection attacks.

**Fix - Add validation pipe:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\auth.controller.ts
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    async
```


## License: unknown
https://github.com/PedroAvila/pos-market-comercio/blob/208c768cc1b2aa435343578b7e4690ea11adb1bc/src/auth/auth.controller.ts

```
# 🔴 Security Issues Found

Here are the critical security vulnerabilities in your auth and user modules:

## **Critical Issues**

### 1. **Hardcoded JWT Secret** ⚠️
**File:** `jwt.strategy.ts`
```
secretOrKey: process.env.JWT_SECRET || 'secret123',
```
**Risk:** If `JWT_SECRET` is not set, it defaults to `'secret123'` - anyone can forge tokens.

**Fix:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\jwt.strategy.ts
constructor() {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('JWT_SECRET environment variable is not set');
    }
    super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: secret,
    });
}
````

---

### 2. **No Input Validation** ⚠️
**Files:** `auth.controller.ts`, `user.controller.ts`

**Risk:** No validation on email format, password strength, or injection attacks.

**Fix - Add validation pipe:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\auth.controller.ts
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    async
```


## License: GPL-3.0
https://github.com/AgentosUA/petfinder-api-university/blob/7d5d96556523dd084a918c9ef5e5164d56d7faec/src/auth/auth.controller.ts

```
# 🔴 Security Issues Found

Here are the critical security vulnerabilities in your auth and user modules:

## **Critical Issues**

### 1. **Hardcoded JWT Secret** ⚠️
**File:** `jwt.strategy.ts`
```
secretOrKey: process.env.JWT_SECRET || 'secret123',
```
**Risk:** If `JWT_SECRET` is not set, it defaults to `'secret123'` - anyone can forge tokens.

**Fix:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\jwt.strategy.ts
constructor() {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('JWT_SECRET environment variable is not set');
    }
    super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: secret,
    });
}
````

---

### 2. **No Input Validation** ⚠️
**Files:** `auth.controller.ts`, `user.controller.ts`

**Risk:** No validation on email format, password strength, or injection attacks.

**Fix - Add validation pipe:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\auth.controller.ts
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    async
```


## License: unknown
https://github.com/PedroAvila/pos-market-comercio/blob/208c768cc1b2aa435343578b7e4690ea11adb1bc/src/auth/auth.controller.ts

```
# 🔴 Security Issues Found

Here are the critical security vulnerabilities in your auth and user modules:

## **Critical Issues**

### 1. **Hardcoded JWT Secret** ⚠️
**File:** `jwt.strategy.ts`
```
secretOrKey: process.env.JWT_SECRET || 'secret123',
```
**Risk:** If `JWT_SECRET` is not set, it defaults to `'secret123'` - anyone can forge tokens.

**Fix:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\jwt.strategy.ts
constructor() {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('JWT_SECRET environment variable is not set');
    }
    super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: secret,
    });
}
````

---

### 2. **No Input Validation** ⚠️
**Files:** `auth.controller.ts`, `user.controller.ts`

**Risk:** No validation on email format, password strength, or injection attacks.

**Fix - Add validation pipe:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\auth.controller.ts
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    async
```


## License: unknown
https://github.com/Samsheer-alam/library-management/blob/72066ee424486a3c018575039560a8b50f9efe52/src/auth/auth.controller.ts

```
# 🔴 Security Issues Found

Here are the critical security vulnerabilities in your auth and user modules:

## **Critical Issues**

### 1. **Hardcoded JWT Secret** ⚠️
**File:** `jwt.strategy.ts`
```
secretOrKey: process.env.JWT_SECRET || 'secret123',
```
**Risk:** If `JWT_SECRET` is not set, it defaults to `'secret123'` - anyone can forge tokens.

**Fix:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\jwt.strategy.ts
constructor() {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('JWT_SECRET environment variable is not set');
    }
    super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: secret,
    });
}
````

---

### 2. **No Input Validation** ⚠️
**Files:** `auth.controller.ts`, `user.controller.ts`

**Risk:** No validation on email format, password strength, or injection attacks.

**Fix - Add validation pipe:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\auth.controller.ts
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    async login(
        @Body(new ValidationPipe()) body: LoginDto,
    ) {
        try
```


## License: GPL-3.0
https://github.com/AgentosUA/petfinder-api-university/blob/7d5d96556523dd084a918c9ef5e5164d56d7faec/src/auth/auth.controller.ts

```
# 🔴 Security Issues Found

Here are the critical security vulnerabilities in your auth and user modules:

## **Critical Issues**

### 1. **Hardcoded JWT Secret** ⚠️
**File:** `jwt.strategy.ts`
```
secretOrKey: process.env.JWT_SECRET || 'secret123',
```
**Risk:** If `JWT_SECRET` is not set, it defaults to `'secret123'` - anyone can forge tokens.

**Fix:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\jwt.strategy.ts
constructor() {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('JWT_SECRET environment variable is not set');
    }
    super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: secret,
    });
}
````

---

### 2. **No Input Validation** ⚠️
**Files:** `auth.controller.ts`, `user.controller.ts`

**Risk:** No validation on email format, password strength, or injection attacks.

**Fix - Add validation pipe:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\auth.controller.ts
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    async
```


## License: unknown
https://github.com/PedroAvila/pos-market-comercio/blob/208c768cc1b2aa435343578b7e4690ea11adb1bc/src/auth/auth.controller.ts

```
# 🔴 Security Issues Found

Here are the critical security vulnerabilities in your auth and user modules:

## **Critical Issues**

### 1. **Hardcoded JWT Secret** ⚠️
**File:** `jwt.strategy.ts`
```
secretOrKey: process.env.JWT_SECRET || 'secret123',
```
**Risk:** If `JWT_SECRET` is not set, it defaults to `'secret123'` - anyone can forge tokens.

**Fix:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\jwt.strategy.ts
constructor() {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('JWT_SECRET environment variable is not set');
    }
    super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: secret,
    });
}
````

---

### 2. **No Input Validation** ⚠️
**Files:** `auth.controller.ts`, `user.controller.ts`

**Risk:** No validation on email format, password strength, or injection attacks.

**Fix - Add validation pipe:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\auth.controller.ts
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    async
```


## License: unknown
https://github.com/Samsheer-alam/library-management/blob/72066ee424486a3c018575039560a8b50f9efe52/src/auth/auth.controller.ts

```
# 🔴 Security Issues Found

Here are the critical security vulnerabilities in your auth and user modules:

## **Critical Issues**

### 1. **Hardcoded JWT Secret** ⚠️
**File:** `jwt.strategy.ts`
```
secretOrKey: process.env.JWT_SECRET || 'secret123',
```
**Risk:** If `JWT_SECRET` is not set, it defaults to `'secret123'` - anyone can forge tokens.

**Fix:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\jwt.strategy.ts
constructor() {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('JWT_SECRET environment variable is not set');
    }
    super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: secret,
    });
}
````

---

### 2. **No Input Validation** ⚠️
**Files:** `auth.controller.ts`, `user.controller.ts`

**Risk:** No validation on email format, password strength, or injection attacks.

**Fix - Add validation pipe:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\auth.controller.ts
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    async login(
        @Body(new ValidationPipe()) body: LoginDto,
    ) {
        try
```


## License: GPL-3.0
https://github.com/AgentosUA/petfinder-api-university/blob/7d5d96556523dd084a918c9ef5e5164d56d7faec/src/auth/auth.controller.ts

```
# 🔴 Security Issues Found

Here are the critical security vulnerabilities in your auth and user modules:

## **Critical Issues**

### 1. **Hardcoded JWT Secret** ⚠️
**File:** `jwt.strategy.ts`
```
secretOrKey: process.env.JWT_SECRET || 'secret123',
```
**Risk:** If `JWT_SECRET` is not set, it defaults to `'secret123'` - anyone can forge tokens.

**Fix:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\jwt.strategy.ts
constructor() {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('JWT_SECRET environment variable is not set');
    }
    super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: secret,
    });
}
````

---

### 2. **No Input Validation** ⚠️
**Files:** `auth.controller.ts`, `user.controller.ts`

**Risk:** No validation on email format, password strength, or injection attacks.

**Fix - Add validation pipe:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\auth.controller.ts
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    async
```


## License: unknown
https://github.com/PedroAvila/pos-market-comercio/blob/208c768cc1b2aa435343578b7e4690ea11adb1bc/src/auth/auth.controller.ts

```
# 🔴 Security Issues Found

Here are the critical security vulnerabilities in your auth and user modules:

## **Critical Issues**

### 1. **Hardcoded JWT Secret** ⚠️
**File:** `jwt.strategy.ts`
```
secretOrKey: process.env.JWT_SECRET || 'secret123',
```
**Risk:** If `JWT_SECRET` is not set, it defaults to `'secret123'` - anyone can forge tokens.

**Fix:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\jwt.strategy.ts
constructor() {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('JWT_SECRET environment variable is not set');
    }
    super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: secret,
    });
}
````

---

### 2. **No Input Validation** ⚠️
**Files:** `auth.controller.ts`, `user.controller.ts`

**Risk:** No validation on email format, password strength, or injection attacks.

**Fix - Add validation pipe:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\auth.controller.ts
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    async
```


## License: unknown
https://github.com/Samsheer-alam/library-management/blob/72066ee424486a3c018575039560a8b50f9efe52/src/auth/auth.controller.ts

```
# 🔴 Security Issues Found

Here are the critical security vulnerabilities in your auth and user modules:

## **Critical Issues**

### 1. **Hardcoded JWT Secret** ⚠️
**File:** `jwt.strategy.ts`
```
secretOrKey: process.env.JWT_SECRET || 'secret123',
```
**Risk:** If `JWT_SECRET` is not set, it defaults to `'secret123'` - anyone can forge tokens.

**Fix:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\jwt.strategy.ts
constructor() {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('JWT_SECRET environment variable is not set');
    }
    super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: secret,
    });
}
````

---

### 2. **No Input Validation** ⚠️
**Files:** `auth.controller.ts`, `user.controller.ts`

**Risk:** No validation on email format, password strength, or injection attacks.

**Fix - Add validation pipe:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\auth.controller.ts
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    async login(
        @Body(new ValidationPipe()) body: LoginDto,
    ) {
        try
```


## License: GPL-3.0
https://github.com/AgentosUA/petfinder-api-university/blob/7d5d96556523dd084a918c9ef5e5164d56d7faec/src/auth/auth.controller.ts

```
# 🔴 Security Issues Found

Here are the critical security vulnerabilities in your auth and user modules:

## **Critical Issues**

### 1. **Hardcoded JWT Secret** ⚠️
**File:** `jwt.strategy.ts`
```
secretOrKey: process.env.JWT_SECRET || 'secret123',
```
**Risk:** If `JWT_SECRET` is not set, it defaults to `'secret123'` - anyone can forge tokens.

**Fix:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\jwt.strategy.ts
constructor() {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('JWT_SECRET environment variable is not set');
    }
    super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: secret,
    });
}
````

---

### 2. **No Input Validation** ⚠️
**Files:** `auth.controller.ts`, `user.controller.ts`

**Risk:** No validation on email format, password strength, or injection attacks.

**Fix - Add validation pipe:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\auth.controller.ts
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    async
```


## License: unknown
https://github.com/PedroAvila/pos-market-comercio/blob/208c768cc1b2aa435343578b7e4690ea11adb1bc/src/auth/auth.controller.ts

```
# 🔴 Security Issues Found

Here are the critical security vulnerabilities in your auth and user modules:

## **Critical Issues**

### 1. **Hardcoded JWT Secret** ⚠️
**File:** `jwt.strategy.ts`
```
secretOrKey: process.env.JWT_SECRET || 'secret123',
```
**Risk:** If `JWT_SECRET` is not set, it defaults to `'secret123'` - anyone can forge tokens.

**Fix:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\jwt.strategy.ts
constructor() {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('JWT_SECRET environment variable is not set');
    }
    super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: secret,
    });
}
````

---

### 2. **No Input Validation** ⚠️
**Files:** `auth.controller.ts`, `user.controller.ts`

**Risk:** No validation on email format, password strength, or injection attacks.

**Fix - Add validation pipe:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\auth.controller.ts
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    async
```


## License: unknown
https://github.com/Samsheer-alam/library-management/blob/72066ee424486a3c018575039560a8b50f9efe52/src/auth/auth.controller.ts

```
# 🔴 Security Issues Found

Here are the critical security vulnerabilities in your auth and user modules:

## **Critical Issues**

### 1. **Hardcoded JWT Secret** ⚠️
**File:** `jwt.strategy.ts`
```
secretOrKey: process.env.JWT_SECRET || 'secret123',
```
**Risk:** If `JWT_SECRET` is not set, it defaults to `'secret123'` - anyone can forge tokens.

**Fix:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\jwt.strategy.ts
constructor() {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('JWT_SECRET environment variable is not set');
    }
    super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: secret,
    });
}
````

---

### 2. **No Input Validation** ⚠️
**Files:** `auth.controller.ts`, `user.controller.ts`

**Risk:** No validation on email format, password strength, or injection attacks.

**Fix - Add validation pipe:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\auth.controller.ts
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    async login(
        @Body(new ValidationPipe()) body: LoginDto,
    ) {
        try
```


## License: GPL-3.0
https://github.com/AgentosUA/petfinder-api-university/blob/7d5d96556523dd084a918c9ef5e5164d56d7faec/src/auth/auth.controller.ts

```
# 🔴 Security Issues Found

Here are the critical security vulnerabilities in your auth and user modules:

## **Critical Issues**

### 1. **Hardcoded JWT Secret** ⚠️
**File:** `jwt.strategy.ts`
```
secretOrKey: process.env.JWT_SECRET || 'secret123',
```
**Risk:** If `JWT_SECRET` is not set, it defaults to `'secret123'` - anyone can forge tokens.

**Fix:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\jwt.strategy.ts
constructor() {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('JWT_SECRET environment variable is not set');
    }
    super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: secret,
    });
}
````

---

### 2. **No Input Validation** ⚠️
**Files:** `auth.controller.ts`, `user.controller.ts`

**Risk:** No validation on email format, password strength, or injection attacks.

**Fix - Add validation pipe:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\auth.controller.ts
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    async
```


## License: unknown
https://github.com/PedroAvila/pos-market-comercio/blob/208c768cc1b2aa435343578b7e4690ea11adb1bc/src/auth/auth.controller.ts

```
# 🔴 Security Issues Found

Here are the critical security vulnerabilities in your auth and user modules:

## **Critical Issues**

### 1. **Hardcoded JWT Secret** ⚠️
**File:** `jwt.strategy.ts`
```
secretOrKey: process.env.JWT_SECRET || 'secret123',
```
**Risk:** If `JWT_SECRET` is not set, it defaults to `'secret123'` - anyone can forge tokens.

**Fix:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\jwt.strategy.ts
constructor() {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('JWT_SECRET environment variable is not set');
    }
    super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: secret,
    });
}
````

---

### 2. **No Input Validation** ⚠️
**Files:** `auth.controller.ts`, `user.controller.ts`

**Risk:** No validation on email format, password strength, or injection attacks.

**Fix - Add validation pipe:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\auth.controller.ts
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    async
```


## License: unknown
https://github.com/Samsheer-alam/library-management/blob/72066ee424486a3c018575039560a8b50f9efe52/src/auth/auth.controller.ts

```
# 🔴 Security Issues Found

Here are the critical security vulnerabilities in your auth and user modules:

## **Critical Issues**

### 1. **Hardcoded JWT Secret** ⚠️
**File:** `jwt.strategy.ts`
```
secretOrKey: process.env.JWT_SECRET || 'secret123',
```
**Risk:** If `JWT_SECRET` is not set, it defaults to `'secret123'` - anyone can forge tokens.

**Fix:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\jwt.strategy.ts
constructor() {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('JWT_SECRET environment variable is not set');
    }
    super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: secret,
    });
}
````

---

### 2. **No Input Validation** ⚠️
**Files:** `auth.controller.ts`, `user.controller.ts`

**Risk:** No validation on email format, password strength, or injection attacks.

**Fix - Add validation pipe:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\auth.controller.ts
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    async login(
        @Body(new ValidationPipe()) body: LoginDto,
    ) {
        try
```


## License: GPL-3.0
https://github.com/AgentosUA/petfinder-api-university/blob/7d5d96556523dd084a918c9ef5e5164d56d7faec/src/auth/auth.controller.ts

```
# 🔴 Security Issues Found

Here are the critical security vulnerabilities in your auth and user modules:

## **Critical Issues**

### 1. **Hardcoded JWT Secret** ⚠️
**File:** `jwt.strategy.ts`
```
secretOrKey: process.env.JWT_SECRET || 'secret123',
```
**Risk:** If `JWT_SECRET` is not set, it defaults to `'secret123'` - anyone can forge tokens.

**Fix:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\jwt.strategy.ts
constructor() {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('JWT_SECRET environment variable is not set');
    }
    super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: secret,
    });
}
````

---

### 2. **No Input Validation** ⚠️
**Files:** `auth.controller.ts`, `user.controller.ts`

**Risk:** No validation on email format, password strength, or injection attacks.

**Fix - Add validation pipe:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\auth.controller.ts
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    async
```


## License: unknown
https://github.com/PedroAvila/pos-market-comercio/blob/208c768cc1b2aa435343578b7e4690ea11adb1bc/src/auth/auth.controller.ts

```
# 🔴 Security Issues Found

Here are the critical security vulnerabilities in your auth and user modules:

## **Critical Issues**

### 1. **Hardcoded JWT Secret** ⚠️
**File:** `jwt.strategy.ts`
```
secretOrKey: process.env.JWT_SECRET || 'secret123',
```
**Risk:** If `JWT_SECRET` is not set, it defaults to `'secret123'` - anyone can forge tokens.

**Fix:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\jwt.strategy.ts
constructor() {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('JWT_SECRET environment variable is not set');
    }
    super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: secret,
    });
}
````

---

### 2. **No Input Validation** ⚠️
**Files:** `auth.controller.ts`, `user.controller.ts`

**Risk:** No validation on email format, password strength, or injection attacks.

**Fix - Add validation pipe:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\auth.controller.ts
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    async
```


## License: unknown
https://github.com/Samsheer-alam/library-management/blob/72066ee424486a3c018575039560a8b50f9efe52/src/auth/auth.controller.ts

```
# 🔴 Security Issues Found

Here are the critical security vulnerabilities in your auth and user modules:

## **Critical Issues**

### 1. **Hardcoded JWT Secret** ⚠️
**File:** `jwt.strategy.ts`
```
secretOrKey: process.env.JWT_SECRET || 'secret123',
```
**Risk:** If `JWT_SECRET` is not set, it defaults to `'secret123'` - anyone can forge tokens.

**Fix:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\jwt.strategy.ts
constructor() {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('JWT_SECRET environment variable is not set');
    }
    super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: secret,
    });
}
````

---

### 2. **No Input Validation** ⚠️
**Files:** `auth.controller.ts`, `user.controller.ts`

**Risk:** No validation on email format, password strength, or injection attacks.

**Fix - Add validation pipe:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\auth.controller.ts
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    async login(
        @Body(new ValidationPipe()) body: LoginDto,
    ) {
        try
```


## License: GPL-3.0
https://github.com/AgentosUA/petfinder-api-university/blob/7d5d96556523dd084a918c9ef5e5164d56d7faec/src/auth/auth.controller.ts

```
# 🔴 Security Issues Found

Here are the critical security vulnerabilities in your auth and user modules:

## **Critical Issues**

### 1. **Hardcoded JWT Secret** ⚠️
**File:** `jwt.strategy.ts`
```
secretOrKey: process.env.JWT_SECRET || 'secret123',
```
**Risk:** If `JWT_SECRET` is not set, it defaults to `'secret123'` - anyone can forge tokens.

**Fix:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\jwt.strategy.ts
constructor() {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('JWT_SECRET environment variable is not set');
    }
    super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: secret,
    });
}
````

---

### 2. **No Input Validation** ⚠️
**Files:** `auth.controller.ts`, `user.controller.ts`

**Risk:** No validation on email format, password strength, or injection attacks.

**Fix - Add validation pipe:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\auth.controller.ts
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    async
```


## License: unknown
https://github.com/PedroAvila/pos-market-comercio/blob/208c768cc1b2aa435343578b7e4690ea11adb1bc/src/auth/auth.controller.ts

```
# 🔴 Security Issues Found

Here are the critical security vulnerabilities in your auth and user modules:

## **Critical Issues**

### 1. **Hardcoded JWT Secret** ⚠️
**File:** `jwt.strategy.ts`
```
secretOrKey: process.env.JWT_SECRET || 'secret123',
```
**Risk:** If `JWT_SECRET` is not set, it defaults to `'secret123'` - anyone can forge tokens.

**Fix:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\jwt.strategy.ts
constructor() {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('JWT_SECRET environment variable is not set');
    }
    super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: secret,
    });
}
````

---

### 2. **No Input Validation** ⚠️
**Files:** `auth.controller.ts`, `user.controller.ts`

**Risk:** No validation on email format, password strength, or injection attacks.

**Fix - Add validation pipe:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\auth.controller.ts
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    async
```


## License: unknown
https://github.com/Samsheer-alam/library-management/blob/72066ee424486a3c018575039560a8b50f9efe52/src/auth/auth.controller.ts

```
# 🔴 Security Issues Found

Here are the critical security vulnerabilities in your auth and user modules:

## **Critical Issues**

### 1. **Hardcoded JWT Secret** ⚠️
**File:** `jwt.strategy.ts`
```
secretOrKey: process.env.JWT_SECRET || 'secret123',
```
**Risk:** If `JWT_SECRET` is not set, it defaults to `'secret123'` - anyone can forge tokens.

**Fix:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\jwt.strategy.ts
constructor() {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('JWT_SECRET environment variable is not set');
    }
    super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: secret,
    });
}
````

---

### 2. **No Input Validation** ⚠️
**Files:** `auth.controller.ts`, `user.controller.ts`

**Risk:** No validation on email format, password strength, or injection attacks.

**Fix - Add validation pipe:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\auth.controller.ts
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    async login(
        @Body(new ValidationPipe()) body: LoginDto,
    ) {
        try
```


## License: GPL-3.0
https://github.com/AgentosUA/petfinder-api-university/blob/7d5d96556523dd084a918c9ef5e5164d56d7faec/src/auth/auth.controller.ts

```
# 🔴 Security Issues Found

Here are the critical security vulnerabilities in your auth and user modules:

## **Critical Issues**

### 1. **Hardcoded JWT Secret** ⚠️
**File:** `jwt.strategy.ts`
```
secretOrKey: process.env.JWT_SECRET || 'secret123',
```
**Risk:** If `JWT_SECRET` is not set, it defaults to `'secret123'` - anyone can forge tokens.

**Fix:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\jwt.strategy.ts
constructor() {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('JWT_SECRET environment variable is not set');
    }
    super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: secret,
    });
}
````

---

### 2. **No Input Validation** ⚠️
**Files:** `auth.controller.ts`, `user.controller.ts`

**Risk:** No validation on email format, password strength, or injection attacks.

**Fix - Add validation pipe:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\auth.controller.ts
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    async
```


## License: unknown
https://github.com/PedroAvila/pos-market-comercio/blob/208c768cc1b2aa435343578b7e4690ea11adb1bc/src/auth/auth.controller.ts

```
# 🔴 Security Issues Found

Here are the critical security vulnerabilities in your auth and user modules:

## **Critical Issues**

### 1. **Hardcoded JWT Secret** ⚠️
**File:** `jwt.strategy.ts`
```
secretOrKey: process.env.JWT_SECRET || 'secret123',
```
**Risk:** If `JWT_SECRET` is not set, it defaults to `'secret123'` - anyone can forge tokens.

**Fix:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\jwt.strategy.ts
constructor() {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('JWT_SECRET environment variable is not set');
    }
    super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: secret,
    });
}
````

---

### 2. **No Input Validation** ⚠️
**Files:** `auth.controller.ts`, `user.controller.ts`

**Risk:** No validation on email format, password strength, or injection attacks.

**Fix - Add validation pipe:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\auth.controller.ts
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    async
```


## License: unknown
https://github.com/Samsheer-alam/library-management/blob/72066ee424486a3c018575039560a8b50f9efe52/src/auth/auth.controller.ts

```
# 🔴 Security Issues Found

Here are the critical security vulnerabilities in your auth and user modules:

## **Critical Issues**

### 1. **Hardcoded JWT Secret** ⚠️
**File:** `jwt.strategy.ts`
```
secretOrKey: process.env.JWT_SECRET || 'secret123',
```
**Risk:** If `JWT_SECRET` is not set, it defaults to `'secret123'` - anyone can forge tokens.

**Fix:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\jwt.strategy.ts
constructor() {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('JWT_SECRET environment variable is not set');
    }
    super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: secret,
    });
}
````

---

### 2. **No Input Validation** ⚠️
**Files:** `auth.controller.ts`, `user.controller.ts`

**Risk:** No validation on email format, password strength, or injection attacks.

**Fix - Add validation pipe:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\auth.controller.ts
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    async login(
        @Body(new ValidationPipe()) body: LoginDto,
    ) {
        try
```


## License: GPL-3.0
https://github.com/AgentosUA/petfinder-api-university/blob/7d5d96556523dd084a918c9ef5e5164d56d7faec/src/auth/auth.controller.ts

```
# 🔴 Security Issues Found

Here are the critical security vulnerabilities in your auth and user modules:

## **Critical Issues**

### 1. **Hardcoded JWT Secret** ⚠️
**File:** `jwt.strategy.ts`
```
secretOrKey: process.env.JWT_SECRET || 'secret123',
```
**Risk:** If `JWT_SECRET` is not set, it defaults to `'secret123'` - anyone can forge tokens.

**Fix:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\jwt.strategy.ts
constructor() {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('JWT_SECRET environment variable is not set');
    }
    super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: secret,
    });
}
````

---

### 2. **No Input Validation** ⚠️
**Files:** `auth.controller.ts`, `user.controller.ts`

**Risk:** No validation on email format, password strength, or injection attacks.

**Fix - Add validation pipe:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\auth.controller.ts
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    async login(
        @Body(new ValidationPipe()) body: LoginDto,
    ) {
        try
```


## License: unknown
https://github.com/Samsheer-alam/library-management/blob/72066ee424486a3c018575039560a8b50f9efe52/src/auth/auth.controller.ts

```
# 🔴 Security Issues Found

Here are the critical security vulnerabilities in your auth and user modules:

## **Critical Issues**

### 1. **Hardcoded JWT Secret** ⚠️
**File:** `jwt.strategy.ts`
```
secretOrKey: process.env.JWT_SECRET || 'secret123',
```
**Risk:** If `JWT_SECRET` is not set, it defaults to `'secret123'` - anyone can forge tokens.

**Fix:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\jwt.strategy.ts
constructor() {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('JWT_SECRET environment variable is not set');
    }
    super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: secret,
    });
}
````

---

### 2. **No Input Validation** ⚠️
**Files:** `auth.controller.ts`, `user.controller.ts`

**Risk:** No validation on email format, password strength, or injection attacks.

**Fix - Add validation pipe:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\auth.controller.ts
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    async login(
        @Body(new ValidationPipe()) body: LoginDto,
    ) {
        try
```


## License: unknown
https://github.com/PedroAvila/pos-market-comercio/blob/208c768cc1b2aa435343578b7e4690ea11adb1bc/src/auth/auth.controller.ts

```
# 🔴 Security Issues Found

Here are the critical security vulnerabilities in your auth and user modules:

## **Critical Issues**

### 1. **Hardcoded JWT Secret** ⚠️
**File:** `jwt.strategy.ts`
```
secretOrKey: process.env.JWT_SECRET || 'secret123',
```
**Risk:** If `JWT_SECRET` is not set, it defaults to `'secret123'` - anyone can forge tokens.

**Fix:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\jwt.strategy.ts
constructor() {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('JWT_SECRET environment variable is not set');
    }
    super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: secret,
    });
}
````

---

### 2. **No Input Validation** ⚠️
**Files:** `auth.controller.ts`, `user.controller.ts`

**Risk:** No validation on email format, password strength, or injection attacks.

**Fix - Add validation pipe:**
````typescript
// filepath: d:\Repositories\nestjs-practice-app\src\auth\auth.controller.ts
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    async login(
        @Body(new ValidationPipe()) body: LoginDto,
    ) {
        try
```

