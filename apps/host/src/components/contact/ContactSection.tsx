'use client';

import { FC } from "react";
import Image from "next/image";
import { contactConfig, IMAGES } from "@portfolio/content";
import { useComponentFlags } from "@/providers/FeatureFlagsProvider";

const ContactSection: FC = () => {
  const { title, email, resume, socialLinks, form, copyright } = contactConfig;
  const flags = useComponentFlags('ContactSection');
  const showForm = flags.form ?? true;
  const showEmail = flags.email ?? true;
  const showResume = flags.resume ?? true;
  const showSocialLinks = flags.socialLinks ?? true;

  return (
    <div className="flex gap-[24px] items-start max-w-[1440px] mx-auto px-[60px] py-[80px]" data-node-id="7:175">
      <div className="flex-1 flex flex-col items-start justify-between min-h-full" data-node-id="7:176">
        <div className="flex flex-col gap-[40px] items-start w-full" data-node-id="7:177">
          <div className="flex flex-col gap-[16px] items-start w-full" data-node-id="7:178">
            <p className="font-bebas leading-none text-[76px] text-foreground w-[600px]" data-node-id="7:179">
              {title}
            </p>
            <div className="flex flex-col gap-[8px] items-start" data-node-id="7:180">
              {showEmail && (
                <div className="flex gap-[3px] items-start" data-node-id="7:181">
                  <p className="font-manrope font-normal leading-[1.5] text-neutral-offwhite text-[18px]" data-node-id="7:182">
                    {email.label}
                  </p>
                  <div className="flex flex-col items-start" data-node-id="7:183">
                    <p className="font-manrope font-normal leading-[1.5] text-[18px] text-foreground" data-node-id="7:184">
                      {email.value}
                    </p>
                    <div className="h-0 relative w-full" data-name="underline" data-node-id="7:185">
                      <Image src={IMAGES.decorative.underline3} alt="" width={200} height={2} className="w-full h-auto" />
                    </div>
                  </div>
                </div>
              )}
              {showResume && (
                <div className="flex gap-[3px] items-start" data-node-id="7:186">
                  <p className="font-manrope font-normal leading-[1.5] text-neutral-offwhite text-[18px]" data-node-id="7:187">
                    {resume.label.split('resume')[0]}
                  </p>
                  <div className="flex flex-col items-start" data-node-id="7:188">
                    <a href={resume.href} className="font-manrope font-normal leading-[1.5] text-[18px] text-foreground" data-node-id="7:189">
                      resume
                    </a>
                    <div className="h-0 relative w-full" data-node-id="7:190">
                      <Image src={IMAGES.decorative.line7} alt="" width={200} height={2} className="w-full h-auto" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          {showSocialLinks && (
            <div className="flex gap-[24px] items-start" data-node-id="7:191">
              {socialLinks.map((social) => (
                <a key={social.platform} href={social.href} aria-label={social.ariaLabel}>
                  <Image src={social.icon} alt={social.ariaLabel} width={32} height={32} />
                </a>
              ))}
            </div>
          )}
        </div>
        <p className="font-manrope font-medium leading-[1.6] text-neutral-offwhite text-[16px]" data-node-id="7:204">
          {copyright}
        </p>
      </div>
      {showForm && (
        <div className="flex-1 flex flex-col items-start min-h-full" data-node-id="7:205">
          <div className="flex flex-col gap-[40px] items-start w-full" data-node-id="7:206">
            <div className="flex flex-col gap-[24px] items-start w-full" data-node-id="7:207">
              {form.fields.map((field) => (
                <div key={field.name} className="flex flex-col gap-[8px] items-start w-full" data-node-id="7:208">
                  <label htmlFor={field.name} className="font-manrope font-medium leading-[1.6] text-neutral-offwhite text-[16px]" data-node-id="7:209">
                    {field.label}
                  </label>
                  <div className="bg-neutral-gray flex items-start px-[16px] py-[12px] rounded-[4px] w-full" data-node-id="7:210">
                    {field.type === 'textarea' ? (
                      <textarea
                        id={field.name}
                        name={field.name}
                        placeholder={field.placeholder || ''}
                        rows={field.rows || 4}
                        className="font-manrope font-normal leading-[1.5] text-[18px] text-foreground bg-transparent w-full outline-none resize-none"
                      />
                    ) : (
                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder || ''}
                        className="font-manrope font-normal leading-[1.5] text-[18px] text-foreground bg-transparent w-full outline-none"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
            <button className="bg-primary flex h-[54px] items-center justify-center px-[40px] py-[20px] rounded-[100px]" data-name="button" data-node-id="7:224">
              <p className="font-manrope font-bold leading-none text-neutral-black text-[16px] uppercase" data-node-id="7:225">
                {form.submitLabel}
              </p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactSection;
