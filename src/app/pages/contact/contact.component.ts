import { Component, signal, ChangeDetectionStrategy, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private fb = inject(FormBuilder);

  contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    company: [''],
    service: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  isSubmitting = signal(false);
  submitSuccess = signal(false);
  submitError = signal(false);

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    this.submitSuccess.set(false);
    this.submitError.set(false);

    // Simulate form submission
    // In production, replace this with actual API call
    setTimeout(() => {
      this.isSubmitting.set(false);

      // Simulate success (90% of the time)
      if (Math.random() > 0.1) {
        this.submitSuccess.set(true);
        this.contactForm.reset();

        // Hide success message after 5 seconds
        setTimeout(() => {
          this.submitSuccess.set(false);
        }, 5000);
      } else {
        this.submitError.set(true);

        // Hide error message after 5 seconds
        setTimeout(() => {
          this.submitError.set(false);
        }, 5000);
      }
    }, 1500);
  }
}
